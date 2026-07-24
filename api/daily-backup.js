

// Backup automático diário — corre sozinho todos os dias, via Vercel Cron,
// vai buscar os dados ao Supabase e envia por email (via Resend).
// Não precisa do teu computador ligado nem do browser aberto.
// (Agora lê a tabela NOVA "utente" — por linha — em vez do bloco antigo "utentes_data".)

export default async function handler(req, res) {
  // Segurança simples: só aceita pedidos com o segredo certo (o Vercel Cron envia-o)
  const authHeader = req.headers["authorization"];
  const isVercelCron = !!req.headers["x-vercel-cron-schedule"] || String(req.headers["user-agent"] || "").includes("vercel-cron");
  const secretOk = process.env.CRON_SECRET && authHeader === `Bearer ${process.env.CRON_SECRET}`;
  if (!secretOk && !isVercelCron) {
    return res.status(401).json({ error: "Não autorizado" });
  }

  const SUPABASE_URL = "https://kfbuvbtdsfrkzrcrwifs.supabase.co";
  const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
  const headers = { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` };

  const backup = { gerado_em: new Date().toISOString(), dados: {} };

  // Tabelas de bloco único (id = main)
  for (const tabela of ["escala_data", "stock_data", "ementa_data"]) {
    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/${tabela}?id=eq.main`, { headers });
      const rows = await r.json();
      backup.dados[tabela] = Array.isArray(rows) && rows[0] ? rows[0] : null;
    } catch (e) {
      backup.dados[tabela] = null;
    }
  }

  // Utentes — tabela nova "utente" (uma linha por utente), que é a que a app usa.
  // Guardado no formato { utentes: [...] } para o restauro conseguir repor.
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/utente?select=id,data`, { headers });
    const rows = await r.json();
    const utentes = Array.isArray(rows) ? rows.map((row) => ({ id: row.id, ...(row.data || {}) })) : [];
    backup.dados.utentes_data = { utentes };
  } catch (e) {
    backup.dados.utentes_data = null;
  }

  const nUtentes =
    (backup.dados.utentes_data && backup.dados.utentes_data.utentes
      ? backup.dados.utentes_data.utentes.length
      : 0);

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
          <p>O ficheiro em anexo inclui turnos, colaboradores, <strong>${nUtentes} utente(s)</strong>, ementa e stock deste momento.</p>
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

    return res.status(200).json({ success: true, date: dateStr, utentes: nUtentes });
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}
