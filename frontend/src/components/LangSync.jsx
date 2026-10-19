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
 * Langue préférée du navigateur, à la première visite uniquement :
 * 'en' si l'anglais passe avant le français dans ses préférences
 * (ex. navigateur américain), sinon null (on reste sur le français).
 */
const detectBrowserLang = () => {
    // robots (Googlebot explore en anglais) / prerender : version par défaut
    if (navigator.webdriver || /bot|crawl|spider|slurp|lighthouse|headless/i.test(navigator.userAgent)) return null;

    const prefs = (navigator.languages?.length ? navigator.languages : [navigator.language])
        .filter(Boolean)
        .map((l) => l.toLowerCase().slice(0, 2));
    const en = prefs.indexOf('en');
    const fr = prefs.indexOf('fr');
    return en !== -1 && (fr === -1 || en < fr) ? 'en' : null;
};

/**
 * - Met à jour l'attribut lang de <html> selon l'URL.
 * - À l'arrivée sur la page d'accueil, redirige vers la langue choisie
 *   précédemment via le sélecteur FR / EN ; sans choix mémorisé, vers
 *   l'anglais si le navigateur le préfère au français. Les robots (qui
 *   explorent en français) ne sont pas redirigés. Un lien direct vers une
 *   page (ex. /en/contact ou /contact) est toujours respecté.
 */
const LangSync = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const checked = useRef(false);
    const lang = getLangFromPath(location.pathname);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang, location.pathname]);

    useEffect(() => {
        if (checked.current) return;
        checked.current = true;

        const isHome = location.pathname === '/' || location.pathname === '/en';
        const stored = readStoredLang();
        const target = LANGS.includes(stored) ? stored : detectBrowserLang();
        if (isHome && target && target !== lang) {
            const { pathname, search, hash } = location;
            navigate(localizePath(pathname + search + hash, target), { replace: true });
        }
    }, [lang, location, navigate]);

    return null;
};

export default LangSync;
