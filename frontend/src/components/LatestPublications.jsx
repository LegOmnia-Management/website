import { Link } from 'react-router-dom';

import '../assets/styles/latestPublications.css';

import useLang from '../i18n/useLang';
import { articles, localizeArticle } from '../pages/blog/ArticlesList';
import { latestWebinar, latestPressRelease, latestResource } from '../data/publications';

/**
 * Section « Dernières publications » : dernier article, webinaire,
 * communiqué et dernière ressource. Les données viennent de
 * data/publications.js (et de la liste des articles du blog).
 */
const LatestPublications = () => {
    const { lang, lp, tr } = useLang();

    const article = localizeArticle(articles[0], lang);
    const pick = (field) => field?.[lang] ?? field?.fr;

    // une rubrique sans publication n'est pas affichée
    const buildItem = (key, type, data, cta) => {
        if (!data) return null;
        const external = data.href?.startsWith('http');
        return {
            key,
            type,
            title: pick(data.title),
            text: pick(data.text),
            date: pick(data.date),
            img: data.img,
            href: external ? data.href : lp(data.href),
            external,
            cta,
        };
    };

    const items = [
        {
            key: 'article',
            type: "Blog",
            title: article.title,
            text: article.recap,
            date: article.date,
            img: article.img,
            imgPosition: article.imgPosition,
            href: lp(`/blog/articles/${article.slug}`),
            cta: tr("Lire l'article", "Read the article"),
        },
        buildItem('webinar', tr("Webinaire", "Webinar"), latestWebinar, tr("Voir le webinaire", "Watch the webinar")),
        buildItem('press', tr("Communiqué", "Press release"), latestPressRelease, tr("Lire le communiqué", "Read the release")),
        buildItem('resource', tr("Ressource", "Resource"), latestResource, tr("Consulter la ressource", "View the resource")),
    ].filter(Boolean);

    return (
        <section className="latestPub" aria-labelledby="latest-publications">
            <div className="container">
                <h2 id="latest-publications" className="title__h2">
                    {tr("Dernières publications", "Latest publications")}
                </h2>
                <p className="title__subtitle">
                    {tr("Articles, webinaires, communiqués et ressources : ne manquez rien de l'actualité LegOmnia.", "Articles, webinars, press releases and resources: stay up to date with LegOmnia.")}
                </p>

                <ul className="latestPub__list">
                    {items.map((item) => (
                        <li key={item.key} className="latestPub__card">
                            {item.img && (
                                <img
                                    className="latestPub__img"
                                    src={item.img}
                                    alt=""
                                    loading="lazy"
                                    style={item.imgPosition ? { objectPosition: item.imgPosition } : undefined}
                                />
                            )}
                            <div className="latestPub__body">
                                <p className="latestPub__type">{item.type}</p>
                                <h3 className="latestPub__title">{item.title}</h3>
                                {item.date && <p className="latestPub__date">{item.date}</p>}
                                <p className="latestPub__text">{item.text}</p>
                                {item.external ? (
                                    <a className="latestPub__link" href={item.href} target="_blank" rel="noopener noreferrer">{item.cta}</a>
                                ) : (
                                    <Link className="latestPub__link" to={item.href}>{item.cta}</Link>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default LatestPublications;
