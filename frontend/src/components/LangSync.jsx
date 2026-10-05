import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getLangFromPath, localizePath, LANGS } from '../i18n/routes';
import { LANG_STORAGE_KEY } from '../i18n/useLang';

const readStoredLang = () => {
    try {
        return localStorage.getItem(LANG_STORAGE_KEY);
    } catch {
        return null;
    }
};

/**
 * - Met à jour l'attribut lang de <html> selon l'URL.
 * - À l'arrivée sur le site, redirige vers la langue choisie précédemment
 *   via le sélecteur FR / EN (uniquement si un choix a été mémorisé : pas de
 *   détection automatique, pour ne pas gêner l'indexation des moteurs).
 */
const LangSync = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const checked = useRef(false);
    const lang = getLangFromPath(location.pathname);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    useEffect(() => {
        if (checked.current) return;
        checked.current = true;

        const stored = readStoredLang();
        if (LANGS.includes(stored) && stored !== lang) {
            const { pathname, search, hash } = location;
            navigate(localizePath(pathname + search + hash, stored), { replace: true });
        }
    }, [lang, location, navigate]);

    return null;
};

export default LangSync;
