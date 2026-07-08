
// Backup automático diário — corre sozinho todos os dias, via Vercel Cron,
// vai buscar os dados ao Supabase e envia por email (via Resend).
// Não precisa do teu computador ligado nem do browser aberto.

export default async function handler(req, res) {
  // Segurança simples: só aceita pedidos que tragam o segredo certo
  // (o Vercel Cron envia isto automaticamente quando configurado)
  const authHeader = req.headers["authorization"];
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: "Não autorizado" });
  }

  const SUPABASE_URL = "https://kfbuvbtdsfrkzrcrwifs.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmYnV2YnRkc2Zya3pyY3J3aWZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1NjIyMDQsImV4cCI6MjA5ODEzODIwNH0.lzaWuW_-aS7OQ9kzxOVw1msqFKkip85QeVRknE1tDMw";

  const TABELAS = ["escala_data", "stock_data", "utentes_data", "ementa_data"];
  const backup = { gerado_em: new Date().toISOString(), dados: {} };

  for (const tabela of TABELAS) {
    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/${tabela}?id=eq.main`, {
        headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
      });
      const rows = await r.json();
      backup.dados[tabela] = Array.isArray(rows) && rows[0] ? rows[0] : null;
    } catch (e) {
      backup.dados[tabela] = null;
    }
  }

  const jsonContent = JSON.stringify(backup, null, 2);
  const base64Content = Buffer.from(jsonContent, "utf-8").toString("base64");
  const dateStr = new Date().toISOString().slice(0, 10);

  try {
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Backup AOSM <onboarding@resend.dev>",
        to: [process.env.BACKUP_EMAIL_TO],
        subject: `📦 Backup diário AOSM — ${dateStr}`,
        html: `
          <p>Backup automático diário da app de gestão da AOSM.</p>
          <p><strong>Data:</strong> ${dateStr}</p>
          <p>O ficheiro em anexo tem os dados de turnos, colaboradores, utentes e stock deste momento.</p>
          <p style="color:#888;font-size:12px">Guarda este email/ficheiro num sítio seguro (ex: uma pasta "Backups AOSM" no teu computador ou Google Drive).</p>
        `,
        attachments: [
          {
            filename: `backup-aosm-${dateStr}.json`,
            content: base64Content,
          },
        ],
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      return res.status(500).json({ error: "Falha ao enviar email", details: errText });
    }

    return res.status(200).json({ success: true, date: dateStr });
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}
