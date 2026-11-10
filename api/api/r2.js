// api/api/r2.js
// Ponte segura entre a app e o Cloudflare R2 (armazenamento de ficheiros do chat).
// - op=put: recebe um ficheiro (base64) e guarda-o no R2 (o ficheiro passa por aqui,
//   por isso o browser não precisa de configuração de CORS).
// - op=get: devolve um link temporário (assinado) para ver/descarregar um ficheiro.
// - op=delete: apaga um ficheiro do R2.
// Segurança: só funciona para quem tem sessão iniciada (token do login do Supabase).
// Sem bibliotecas externas — a assinatura AWS SigV4 é feita com o 'crypto' do Node.
import crypto from "crypto";

const SUPABASE_URL = process.env.SUPABASE_URL || "https://kfbuvbtdsfrkzrcrwifs.supabase.co";
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

// Lê as variáveis aceitando maiúsculas ou a forma com que foram guardadas
const ACCESS_KEY = process.env.R2_ACCESS_KEY_ID || process.env.R2_Access_Key_ID || "";
const SECRET_KEY = process.env.R2_SECRET_ACCESS_KEY || process.env.R2_Secret_Access_Key || "";
const ENDPOINT = process.env.R2_ENDPOINT || "";
const BUCKET = process.env.R2_BUCKET || "";
const REGION = "auto";

function hmac(key, str) { return crypto.createHmac("sha256", key).update(str, "utf8").digest(); }
function sha256hex(str) { return crypto.createHash("sha256").update(str, "utf8").digest("hex"); }
function enc(s) { return encodeURIComponent(s).replace(/[!*'()]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase()); }
function encPath(key) { return key.split("/").map(enc).join("/"); }

// Cria um URL assinado (presigned) para PUT ou GET
function presign(method, key, expires) {
  const url = new URL(ENDPOINT);
  const host = url.host;
  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "");
  const dateStamp = amzDate.slice(0, 8);
  const scope = `${dateStamp}/${REGION}/s3/aws4_request`;
  const canonicalUri = `/${BUCKET}/${encPath(key)}`;
  const q = {
    "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
    "X-Amz-Credential": `${ACCESS_KEY}/${scope}`,
    "X-Amz-Date": amzDate,
    "X-Amz-Expires": String(expires),
    "X-Amz-SignedHeaders": "host",
  };
  const canonicalQuery = Object.keys(q).sort().map((k) => `${enc(k)}=${enc(q[k])}`).join("&");
  const canonicalHeaders = `host:${host}\n`;
  const emptyHash = sha256hex(""); // para URLs assinados, usa-se o hash do corpo vazio
  const canonicalRequest = [method, canonicalUri, canonicalQuery, canonicalHeaders, "host", emptyHash].join("\n");
  const stringToSign = ["AWS4-HMAC-SHA256", amzDate, scope, sha256hex(canonicalRequest)].join("\n");
  const kDate = hmac("AWS4" + SECRET_KEY, dateStamp);
  const kRegion = hmac(kDate, REGION);
  const kService = hmac(kRegion, "s3");
  const kSigning = hmac(kService, "aws4_request");
  const signature = crypto.createHmac("sha256", kSigning).update(stringToSign, "utf8").digest("hex");
  return `${url.origin}${canonicalUri}?${canonicalQuery}&X-Amz-Signature=${signature}`;
}

function send(res, status, obj) {
  res.status(status).setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(obj));
}

export default async function handler(req, res) {
  if (!ACCESS_KEY || !SECRET_KEY || !ENDPOINT || !BUCKET) {
    return send(res, 500, { error: "servidor sem configuracao R2" });
  }
  // 1) Confirmar sessão iniciada
  const auth = req.headers["authorization"] || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token) return send(res, 401, { error: "sem sessao" });
  try {
    const ures = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
      headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${token}` },
    });
    if (!ures.ok) return send(res, 401, { error: "sessao invalida" });
  } catch (e) {
    return send(res, 401, { error: "sessao invalida" });
  }

  const op = (req.query && req.query.op) || "";

  // Chave do ficheiro — só permitimos a pasta "chat/"
  const keyFromQuery = (req.query && req.query.key) || "";
  const keyFromBody = (req.body && req.body.key) || "";
  const key = String(keyFromQuery || keyFromBody || "");
  if (!key.startsWith("chat/") || key.includes("..")) {
    return send(res, 400, { error: "chave invalida" });
  }

  try {
    if (op === "put") {
      const b = req.body || {};
      if (!b.dataBase64) return send(res, 400, { error: "sem ficheiro" });
      const bytes = Buffer.from(String(b.dataBase64), "base64");
      if (bytes.length > 4 * 1024 * 1024) return send(res, 413, { error: "ficheiro demasiado grande" });
      const putUrl = presign("PUT", key, 120);
      const r = await fetch(putUrl, {
        method: "PUT",
        headers: { "Content-Type": String(b.contentType || "application/octet-stream") },
        body: bytes,
      });
      if (!r.ok) {
        let det = "";
        try { det = await r.text(); } catch (e3) {}
        const code = (det.match(/<Code>([^<]+)<\/Code>/) || [])[1] || "";
        const host = (() => { try { return new URL(ENDPOINT).host; } catch (e4) { return "?"; } })();
        return send(res, 500, { error: "R2 " + r.status + (code ? " " + code : "") + " | host=" + host + " bucket=" + BUCKET });
      }
      return send(res, 200, { ok: true, key });
    }

    if (op === "get") {
      const getUrl = presign("GET", key, 3600); // link válido 1 hora
      return send(res, 200, { url: getUrl });
    }

    if (op === "delete") {
      const delUrl = presign("DELETE", key, 120);
      const r = await fetch(delUrl, { method: "DELETE" });
      if (!r.ok && r.status !== 404) return send(res, 500, { error: "falha ao apagar (" + r.status + ")" });
      return send(res, 200, { ok: true });
    }

    return send(res, 400, { error: "operacao desconhecida" });
  } catch (e) {
    return send(res, 500, { error: String(e) });
  }
}
