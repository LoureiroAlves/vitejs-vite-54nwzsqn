
// api/file.js
// Serve um ficheiro do Storage privado através de um LINK TEMPORÁRIO assinado (1h).
// Uso: /api/file?p=<caminho>
// Segurança (Fase 1): o bucket deixa de ser público/listável e os caminhos têm uma
// parte aleatória impossível de adivinhar. A autorização por família/utente fica
// para a Fase 3 (endpoints próprios dos portais).
export const config = { runtime: "edge" };

const SUPABASE_URL = process.env.SUPABASE_URL || "https://kfbuvbtdsfrkzrcrwifs.supabase.co";
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const BUCKET = "utentes-docs";

export default async function handler(req) {
  if (!SERVICE_KEY) return new Response("Servidor sem chave configurada", { status: 500 });

  const url = new URL(req.url);
  const path = url.searchParams.get("p");
  if (!path || path.includes("..")) return new Response("Caminho inválido", { status: 400 });

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
