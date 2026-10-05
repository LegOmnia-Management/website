import { useLocation } from 'react-router-dom';

import { getLangFromPath, localizePath } from './routes';

export const LANG_STORAGE_KEY = 'legomnia-lang';

/**
 * Langue courante (déduite de l'URL) et helpers de traduction.
 *
 *   const { lang, lp, t } = useLang();
 *   lp('/contact')          -> '/contact' ou '/en/contact'
 *   t({ fr: frDict, en: enDict }) -> dictionnaire de la langue courante
 */
const useLang = () => {
    const { pathname } = useLocation();
    const lang = getLangFromPath(pathname);

    return {
        lang,
        lp: (path) => localizePath(path, lang),
        t: (dicts) => dicts[lang] ?? dicts.fr,
    };
};

export default useLang;
