import { promises as dns } from "dns";
import { DISPOSABLE_DOMAINS } from "./disposableDomains.js";

// TLD gratuits / très utilisés pour les inscriptions frauduleuses
const SUSPICIOUS_TLDS = new Set(["tk", "ml", "ga", "cf", "gq", "top", "click", "work", "loan", "xyz"]);

// forme canonique : jean.dupont+test@gmail.com == jeandupont@gmail.com
export const canonicalEmail = (email) => {
    let [local, domain] = email.toLowerCase().split("@");
    local = local.split("+")[0];
    if (domain === "gmail.com" || domain === "googlemail.com") {
        local = local.replace(/\./g, "");
        domain = "gmail.com";
    }
    return `${local}@${domain}`;
};

const withTimeout = (promise) => Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 3000))
]);

const hasMailServer = async (domain) => {
    try {
        return (await withTimeout(dns.resolveMx(domain))).length > 0;
    } catch (error) {
        if (error.code === "ENOTFOUND" || error.code === "ENODATA") {
            // pas de MX : un enregistrement A est toléré (RFC 5321)
            try { return (await withTimeout(dns.resolve4(domain))).length > 0; } catch { return false; }
        }
        return true; // erreur DNS transitoire : on ne bloque pas un vrai utilisateur
    }
};

// renvoie un message d'erreur, ou null si l'adresse est acceptable
export const checkEmail = async (email) => {
    const [local, domain] = email.toLowerCase().split("@");
    if (!local || !domain) return "L'email est invalide";
    const tld = domain.split(".").pop();
    if (DISPOSABLE_DOMAINS.has(domain) || [...DISPOSABLE_DOMAINS].some((d) => domain.endsWith(`.${d}`))) {
        return "Les adresses e-mail temporaires ne sont pas acceptées";
    }
    if (SUSPICIOUS_TLDS.has(tld)) return "Cette adresse e-mail n'est pas acceptée";
    if (/^\d{9,}$/.test(local) || /[a-z0-9]{25,}/.test(local) || (local.match(/\./g) || []).length > 4) {
        return "Cette adresse e-mail n'est pas acceptée";
    }
    if (!(await hasMailServer(domain))) return "Le domaine de cette adresse e-mail est introuvable";
    return null;
};
