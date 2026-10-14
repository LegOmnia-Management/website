import { checkEmail, canonicalEmail } from "../utils/emailFilter.js";

// Limites en mémoire (le backend est un processus unique et durable)
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_IP = 5;
const MAX_PER_EMAIL = 1;
const hits = new Map();

const tooMany = (key, max) => {
    const now = Date.now();
    const list = (hits.get(key) || []).filter((t) => now - t < WINDOW_MS);
    if (list.length >= max) {
        hits.set(key, list);
        return true;
    }
    list.push(now);
    hits.set(key, list);
    if (hits.size > 10000) hits.clear();
    return false;
};

const SUCCESS_MESSAGE = "Votre inscription sur la liste d'attente a bien été prise en compte";

// À placer après la validation : filtre les adresses jetables/suspectes
// et limite les inscriptions par IP et par adresse.
const waitlistGuard = async (req, res, next) => {
    const email = String(req.body?.email || "").trim().toLowerCase();

    const emailError = await checkEmail(email);
    if (emailError) return res.status(400).json({ errors: { email: emailError } });

    if (tooMany(`ip:${req.ip}`, MAX_PER_IP)) {
        return res.status(429).json({ errors: { email: "Trop de demandes, veuillez réessayer plus tard" } });
    }
    // même adresse (variantes comprises) : réponse de succès identique, sans nouvel e-mail
    if (tooMany(`email:${canonicalEmail(email)}`, MAX_PER_EMAIL)) {
        return res.status(201).json({ success: true, message: SUCCESS_MESSAGE });
    }
    next();
};

export default waitlistGuard;
