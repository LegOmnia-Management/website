import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {

    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Lien vers une section (ex. /juridictions/rdc#quiz) : on attend le rendu de la page
        if (hash) {
            const timer = setTimeout(() => {
                document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
            return () => clearTimeout(timer);
        }
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
