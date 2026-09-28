import crypto from "crypto";

// Protège les routes d'administration par une clé : header "Authorization: Bearer <ADMIN_API_KEY>".
// Si ADMIN_API_KEY n'est pas défini, les routes protégées sont fermées (403).
const requireAdmin = (req, res, next) => {
    const expected = process.env.ADMIN_API_KEY;
    if (!expected) {
        return res.status(403).json({ success: false, message: "Accès refusé" });
    }

    const header = req.get("authorization") || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : "";

    const a = Buffer.from(token);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
        return res.status(401).json({ success: false, message: "Non autorisé" });
    }

    next();
};

export default requireAdmin;
