import { Children, cloneElement, isValidElement } from 'react';

/**
 * Découpe un contenu (texte ou JSX imbriqué) mot par mot pour l'animation
 * d'apparition du titre du héro (classes .lg-w, voir motion.css).
 * Rendu côté React : reste compatible avec le changement de langue.
 */
const SplitWords = ({ children, delay = 120, step = 70 }) => {
    let n = 0;

    const split = (node) => Children.map(node, (child) => {
        if (typeof child === 'string') {
            return child.split(/(\s+)/).map((part, i) => {
                if (!part) return null;
                if (/^\s+$/.test(part)) return part;
                const style = { transitionDelay: `${delay + n++ * step}ms` };
                return <span className="lg-w" key={i}><span style={style}>{part}</span></span>;
            });
        }
        if (isValidElement(child) && child.props.children !== undefined) {
            return cloneElement(child, undefined, split(child.props.children));
        }
        return child;
    });

    return <>{split(children)}</>;
};

export default SplitWords;
