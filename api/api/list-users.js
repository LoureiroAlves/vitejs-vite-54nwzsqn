// api/api/list-users.js
// Lista os emails das contas criadas no Supabase (Authentication), para
// importar no ecrã "Gestão de Acessos" da app.
// Segurança: só funciona para quem tem sessão iniciada E é administrador.
// Uso: POST /api/api/list-users   (com Authorization: Bearer <token do login>)
export const config = { runtime: "edge" };

const SUPABASE_URL = process.env.SUPABASE_URL || "https://kfbuvbtdsfrkzrcrwifs.supabase.co";
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

// Administradores de base (caso ainda não exista lista de acessos gravada)
const SEED_ADMINS = ["fernandopoalves@gmail.com", "sonialoureiro.quintadosavos@gmail.com"];

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export default async function handler(req) {
  if (!SERVICE_KEY) return json({ error: "servidor sem chave" }, 500);

  // 1) Confirmar sessão iniciada e obter o email de quem chama
  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token) return json({ error: "sem sessao" }, 401);

  const ures = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${token}` },
  });
  if (!ures.ok) return json({ error: "sessao invalida" }, 401);
  const u = await ures.json();
  const email = String(u && u.email ? u.email : "").trim().toLowerCase();

  // 2) Confirmar que é administrador (pela lista de acessos gravada, ou pelos admins de base)
  let role = null;
  try {
    const er = await fetch(`${SUPABASE_URL}/rest/v1/escala_data?id=eq.main&select=app_access`, {
      headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}` },
    });
    const erows = await er.json();
    const list = Array.isArray(erows) && erows[0] && Array.isArray(erows[0].app_access) ? erows[0].app_access : [];
    const acc = list.find((a) => String(a.email || "").trim().toLowerCase() === email);
    if (acc) role = acc.ativo === false ? null : acc.role;
  } catch (e) {}
  if (role !== "admin" && SEED_ADMINS.indexOf(email) === -1) {
    return json({ error: "sem permissao" }, 403);
  }

  // 3) Listar os utilizadores do Supabase Auth (admin API, com paginação)
  try {
    const emails = [];
    for (let page = 1; page <= 20; page++) {
      const r = await fetch(`${SUPABASE_URL}/auth/v1/admin/users?page=${page}&per_page=100`, {
        headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}` },
      });
      if (!r.ok) return json({ error: await r.text() }, 500);
      const d = await r.json();
      const us = Array.isArray(d.users) ? d.users : (Array.isArray(d) ? d : []);
      for (const x of us) {
        if (x && x.email) emails.push(String(x.email).trim().toLowerCase());
      }
      if (us.length < 100) break;
    }
    return json({ emails: Array.from(new Set(emails)) }, 200);
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
}
