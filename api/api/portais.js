// api/portais.js
// Portais públicos por link (etapa 4) — servidos com a CHAVE SECRETA e devolvendo
// APENAS o necessário para cada portal (minimização RGPD).
//   GET  /api/portais?tipo=mapageral                  -> nomes + turnos de toda a equipa
//   GET  /api/portais?tipo=colaborador&code=<codigo>  -> turnos SÓ desse colaborador
//   POST /api/portais?tipo=questionario               -> grava uma resposta de satisfação
export const config = { runtime: "edge" };

const SUPABASE_URL = process.env.SUPABASE_URL || "https://kfbuvbtdsfrkzrcrwifs.supabase.co";
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export default async function handler(req) {
  if (!SERVICE_KEY) return json({ error: "servidor sem chave" }, 500);

  const url = new URL(req.url);
  const tipo = url.searchParams.get("tipo");
  const headers = { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}` };

  try {
    // ---- Mapa geral: só nomes + turnos (nunca passwords, emails, respostas) ----
    if (tipo === "mapageral") {
      const rows = await fetch(`${SUPABASE_URL}/rest/v1/escala_data?id=eq.main`, { headers }).then((r) => r.json());
      const esc = Array.isArray(rows) && rows[0] ? rows[0] : {};
      return json({
        employees: esc.employees || [],
        rv_employees: esc.rv_employees || [],
        schedule: esc.schedule || {},
      }, 200);
    }

    // ---- Colaborador: só os turnos DESTE colaborador ----
    if (tipo === "colaborador") {
      const code = url.searchParams.get("code");
      if (!code) return json({ error: "sem codigo" }, 400);
      const rows = await fetch(`${SUPABASE_URL}/rest/v1/escala_data?id=eq.main`, { headers }).then((r) => r.json());
      const esc = Array.isArray(rows) && rows[0] ? rows[0] : {};
      const profiles = esc.employee_profiles || {};
      const nome = Object.keys(profiles).find((n) => profiles[n] && profiles[n].colaboradorCode === code);
      if (!nome) return json({ notFound: true }, 200);
      const full = esc.schedule || {};
      const schedule = {};
      for (const mk of Object.keys(full)) {
        const md = full[mk] || {};
        const key = Object.keys(md).find((k) => k.trim().toLowerCase() === nome.trim().toLowerCase());
        if (key) schedule[mk] = { [nome]: md[key] };
      }
      return json({ employeeName: nome, schedule }, 200);
    }

    // ---- Questionário de satisfação: gravar uma resposta anónima ----
    if (tipo === "questionario") {
      if (req.method !== "POST") return json({ error: "metodo" }, 405);
      const body = await req.json();
      const nova = {
        id: Date.now().toString() + Math.random().toString(36).slice(2),
        submittedAt: new Date().toISOString(),
        idade: String(body.idade || ""),
        sexo: String(body.sexo || ""),
        ratings: body.ratings && typeof body.ratings === "object" ? body.ratings : {},
        apreciacaoGlobal: body.apreciacaoGlobal && typeof body.apreciacaoGlobal === "object" ? body.apreciacaoGlobal : {},
        sugestaoMelhoria: String(body.sugestaoMelhoria || "").slice(0, 4000),
      };
      const rows = await fetch(`${SUPABASE_URL}/rest/v1/escala_data?id=eq.main&select=satisfaction_responses`, { headers }).then((r) => r.json());
      const atuais = Array.isArray(rows) && rows[0] && rows[0].satisfaction_responses ? rows[0].satisfaction_responses : [];
      const up = await fetch(`${SUPABASE_URL}/rest/v1/escala_data`, {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json", Prefer: "resolution=merge-duplicates" },
        body: JSON.stringify({ id: "main", satisfaction_responses: [...atuais, nova], updated_at: new Date().toISOString() }),
      });
      if (!up.ok) return json({ error: await up.text() }, 500);
      return json({ ok: true }, 200);
    }

    return json({ error: "tipo desconhecido" }, 400);
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
}
