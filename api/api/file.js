// api/file.js
// Serve um ficheiro do Storage privado através de um LINK TEMPORÁRIO assinado (1h).
// Uso: /api/file?p=<caminho>            (lado do pessoal)
//      /api/file?p=<caminho>&familia=<codigo>   (portal da família — validado)
// Para ficheiros de família (caminho com "_family/"), o código da família é OBRIGATÓRIO
// e tem de corresponder ao utente dono do ficheiro.
export const config = { runtime: "edge" };

const SUPABASE_URL = process.env.SUPABASE_URL || "https://kfbuvbtdsfrkzrcrwifs.supabase.co";
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const BUCKET = "utentes-docs";

export default async function handler(req) {
  if (!SERVICE_KEY) return new Response("Servidor sem chave configurada", { status: 500 });

  const url = new URL(req.url);
  const path = url.searchParams.get("p");
  const familia = url.searchParams.get("familia");
  if (!path || path.includes("..")) return new Response("Caminho inválido", { status: 400 });

  // Ficheiros da família: exigem código válido e correspondente ao utente dono
  const isFamily = path.includes("_family/");
  if (isFamily) {
    if (!familia) return new Response("Acesso negado", { status: 403 });
    const r = await fetch(
      `${SUPABASE_URL}/rest/v1/utente?select=id,data`,
      { headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}` } }
    );
    const rows = r.ok ? await r.json() : [];
    const dono = rows.find((x) => x && x.data && x.data.familyCode === familia);
    if (!dono || !path.startsWith(`${dono.id}_family/`)) {
      return new Response("Acesso negado", { status: 403 });
    }
  }

  // Gerar link temporário assinado (válido 1 hora)
  const sign = await fetch(`${SUPABASE_URL}/storage/v1/object/sign/${BUCKET}/${path}`, {
    method: "POST",
    headers: {
      apikey: SERVICE_KEY,
      Authorization: `Bearer ${SERVICE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ expiresIn: 3600 }),
  });
  if (!sign.ok) return new Response("Ficheiro não encontrado", { status: 404 });

  const { signedURL } = await sign.json();
  return Response.redirect(`${SUPABASE_URL}/storage/v1${signedURL}`, 302);
}
