// api/delete-file.js
// Apaga UM ficheiro do Storage (o que foi removido na app).
// Segurança: só funciona para quem tem sessão iniciada (login válido).
// Uso: POST /api/delete-file?p=<caminho-do-ficheiro>   (com Authorization: Bearer <token do login>)
export const config = { runtime: "edge" };

const SUPABASE_URL = process.env.SUPABASE_URL || "https://kfbuvbtdsfrkzrcrwifs.supabase.co";
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const BUCKET = "utentes-docs";

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export default async function handler(req) {
  if (!SERVICE_KEY) return json({ error: "servidor sem chave" }, 500);

  // Confirmar sessão iniciada
  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token) return json({ error: "sem sessao" }, 401);
  const userRes = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${token}` },
  });
  if (!userRes.ok) return json({ error: "sessao invalida" }, 401);

  // Caminho do ficheiro
  const url = new URL(req.url);
  const p = url.searchParams.get("p");
  if (!p || p.includes("..")) return json({ error: "caminho invalido" }, 400);

  try {
    const del = await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}/${p}`, {
      method: "DELETE",
      headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}` },
    });
    if (!del.ok && del.status !== 404) return json({ error: await del.text() }, 500);
    return json({ ok: true }, 200);
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
}
