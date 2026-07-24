
// api/delete-utente-files.js
// Apaga TODOS os ficheiros de um utente no Storage (a pasta <id>/).
// Segurança: só funciona se quem chama tiver uma sessão válida (login).
// Uso: POST /api/delete-utente-files?id=<id-do-utente>   (com Authorization: Bearer <token do login>)
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

  // 1) Confirmar que quem chama tem sessão iniciada (login válido)
  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token) return json({ error: "sem sessao" }, 401);
  const userRes = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${token}` },
  });
  if (!userRes.ok) return json({ error: "sessao invalida" }, 401);
  const user = await userRes.json();
  const email = String(user && user.email ? user.email : "").trim().toLowerCase();
  // Só o administrador principal pode apagar ficheiros de utentes
  if (email !== "fernandopoalves@gmail.com") return json({ error: "sem permissao" }, 403);

  // 2) Id do utente (nome da pasta)
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id || id.includes("..") || id.includes("/")) return json({ error: "id invalido" }, 400);

  const headers = { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}`, "Content-Type": "application/json" };

  try {
    // 3) Listar os ficheiros dentro da pasta <id>/
    const listRes = await fetch(`${SUPABASE_URL}/storage/v1/object/list/${BUCKET}`, {
      method: "POST",
      headers,
      body: JSON.stringify({ prefix: id + "/", limit: 1000 }),
    });
    const items = await listRes.json();
    const paths = (Array.isArray(items) ? items : [])
      .filter((o) => o && o.name)
      .map((o) => `${id}/${o.name}`);

    if (paths.length === 0) return json({ ok: true, apagados: 0 }, 200);

    // 4) Apagar todos de uma vez
    const del = await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}`, {
      method: "DELETE",
      headers,
      body: JSON.stringify({ prefixes: paths }),
    });
    if (!del.ok) return json({ error: await del.text() }, 500);

    return json({ ok: true, apagados: paths.length }, 200);
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
}
