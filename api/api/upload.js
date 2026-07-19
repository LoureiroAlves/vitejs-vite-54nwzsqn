// api/upload.js
// Recebe um ficheiro e guarda-o no Storage privado usando a CHAVE SECRETA (lado do servidor).
// O site (com a chave pública) já não escreve diretamente no Storage.
export const config = { runtime: "edge" };

const SUPABASE_URL = process.env.SUPABASE_URL || "https://kfbuvbtdsfrkzrcrwifs.supabase.co";
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const BUCKET = "utentes-docs";

export default async function handler(req) {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  if (!SERVICE_KEY) return new Response("Servidor sem chave configurada", { status: 500 });

  const url = new URL(req.url);
  const path = url.searchParams.get("path");
  const contentType = url.searchParams.get("contentType") || "application/octet-stream";
  if (!path || path.includes("..")) return new Response("Caminho inválido", { status: 400 });

  const body = await req.arrayBuffer();

  const up = await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}/${path}`, {
    method: "POST",
    headers: {
      apikey: SERVICE_KEY,
      Authorization: `Bearer ${SERVICE_KEY}`,
      "Content-Type": contentType,
      "x-upsert": "true",
    },
    body,
  });

  if (!up.ok) {
    const t = await up.text();
    return new Response(JSON.stringify({ error: t }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({ path }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
