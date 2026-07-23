
// api/familia.js
// Portal da Família (etapa 4) — devolve, com a CHAVE SECRETA do lado do servidor,
// APENAS os dados que a família precisa de ver de um único utente (o do código do link).
// Nunca expõe dados clínicos, medicação, CC, NIF, ficha de admissão, etc. (minimização RGPD).
// Uso: GET /api/familia?code=<codigo_da_familia>
export const config = { runtime: "edge" };

const SUPABASE_URL = process.env.SUPABASE_URL || "https://kfbuvbtdsfrkzrcrwifs.supabase.co";
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

export default async function handler(req) {
  if (!SERVICE_KEY) {
    return new Response(JSON.stringify({ error: "servidor sem chave" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  if (!code) {
    return new Response(JSON.stringify({ error: "sem codigo" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const headers = { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}` };
  const jsonHeaders = { "Content-Type": "application/json", "Cache-Control": "no-store" };

  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/utente?select=id,data`, { headers });
    const rows = await r.json();
    const lista = Array.isArray(rows) ? rows.map((x) => ({ id: x.id, ...(x.data || {}) })) : [];
    const found = lista.find((u) => u.familyCode === code);

    if (!found) {
      return new Response(JSON.stringify({ notFound: true }), { status: 200, headers: jsonHeaders });
    }

    const utente = {
      name: found.name || "",
      photo: found.photo || "",
      room: found.room || "",
      birthDate: found.birthDate || "",
      entryDate: found.entryDate || "",
      dailyLogs: (found.dailyLogs || []).map((l) => ({
        date: l.date,
        text: l.text || "",
        photos: l.photos || [],
        attachments: l.attachments || [],
      })),
      filesFamily: found.filesFamily || [],
    };

    let ementa = null;
    try {
      const er = await fetch(`${SUPABASE_URL}/rest/v1/ementa_data?id=eq.main`, { headers });
      const erows = await er.json();
      if (Array.isArray(erows) && erows[0] && erows[0].ementa) ementa = erows[0].ementa;
    } catch (e) {}

    return new Response(JSON.stringify({ utente, ementa }), { status: 200, headers: jsonHeaders });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), { status: 500, headers: jsonHeaders });
  }
}
