// Envoi d'e-mails via l'API SendGrid (v3 /mail/send), sans SDK : fetch natif de Node ≥ 18.

const SENDGRID_API_URL = "https://api.sendgrid.com/v3/mail/send";
const MAIL_FROM = process.env.MAIL_FROM || "LegOmnia <notifications@legomnia.com>";

// "LegOmnia <notifications@legomnia.com>" → { name: "LegOmnia", email: "notifications@legomnia.com" }
const parseAddress = (value) => {
    const match = String(value).trim().match(/^(?:"?([^"<]*)"?\s*)?<([^>]+)>$/);
    if (match) return { name: match[1]?.trim() || undefined, email: match[2].trim() };
    return { email: String(value).trim() };
};

const toList = (value) => [].concat(value || []).filter(Boolean).map(parseAddress);

// Version texte brut dérivée du HTML (un e-mail HTML seul est un signal de spam courant)
const htmlToText = (html = "") => String(html)
    .replace(/<\/(p|div|h[1-6]|li|tr)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<hr\s*\/?>/gi, "\n---\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/^[ \t]+/gm, "").replace(/[ \t]+$/gm, "").replace(/\n{3,}/g, "\n\n").trim();

// Signature : sendMail({ to, replyTo, subject, html, text })
export const sendMail = async ({ to, replyTo, subject, html, text }) => {
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
        console.warn("SENDGRID_API_KEY absente : e-mail non envoyé");
        return;
    }

    const content = [{ type: "text/plain", value: text || htmlToText(html) }];
    if (html) content.push({ type: "text/html", value: html });

    const payload = {
        personalizations: [{ to: toList(to) }],
        from: parseAddress(MAIL_FROM),
        subject,
        content,
    };
    if (replyTo) payload.reply_to = parseAddress(replyTo);

    try {
        const response = await fetch(SENDGRID_API_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            const body = await response.text().catch(() => "");
            console.error(`Erreur envoi email (SendGrid ${response.status}) :`, body);
        }
    } catch (error) {
        console.error("Erreur envoi email :", error.message);
    }
};
