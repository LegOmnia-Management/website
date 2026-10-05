import { Link, Navigate, useParams } from "react-router-dom";

import '../../assets/styles/general.css';
import '../../assets/styles/blog.css';

import { articles, articlesContent, localizeArticle, localizeContent } from './ArticlesList';

import HeroBg from '../../components/HeroBg';
import SEOHead from '../../components/SEOHead';
import useLang from '../../i18n/useLang';

const ArticleDetail = () => {

    // recup slug article en cours
    const { slug } = useParams();
    const { lang, lp, tr } = useLang();

    // recup article en cours (dans la langue du site si une traduction existe)
    const article = localizeArticle(articles.find(a => a.slug === slug), lang);
    const content = localizeContent(articlesContent.find(c => c.slug === slug), lang);

    // recup index article en cours
    const currentIndex = articles.findIndex(a => a.slug === slug);

    // recup article precedent
    const previousArticle = currentIndex > 0
        ? articles[currentIndex - 1]
        : null;

    // recup article suivant
    const nextArticle = currentIndex > -1 && currentIndex < articles.length - 1
        ? articles[currentIndex + 1]
        : null;
    
    // article introuvable -> redirection vers la liste
    if (!article) {
        return <Navigate to={lp("/blog/articles")} replace />;
    }

    return (
        <main className="main detailArticle">

            <SEOHead
                title={`${article.title} | Blog LegOmnia`}
                description={article.recap}
                canonical={`/blog/articles/${article.slug}`}
                image={article.img}
                contentLang={article.lang}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": tr("Accueil", "Home"), "item": `https://legomnia.com${lp("/")}` },
                            { "@type": "ListItem", "position": 2, "name": "Articles", "item": `https://legomnia.com${lp("/blog/articles")}` },
                            { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://legomnia.com${lp(`/blog/articles/${article.slug}`)}` }
                        ]
                    })
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": article.title,
                        "description": article.recap,
                        "image": article.img,
                        "author": {
                            "@type": "Organization",
                            "name": article.author
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "LegOmnia",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://legomnia.com/logo.png"
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://legomnia.com${lp(`/blog/articles/${article.slug}`)}`
                        }
                    })
                }}
            />

            {/* Hero */}
            <section className="hero">
                <HeroBg />
                <div className="container container__hero">

                    {/* Breadcrumb */}
                    <section className="breadcrumb">
                        <nav aria-label={tr("Fil d'Ariane", "Breadcrumb")}>
                            <Link to={lp("/")}>{tr("Accueil", "Home")}</Link> {'>'} <Link to={lp("/blog/articles")}>Articles</Link> {'>'} <span>{article.title}</span>
                        </nav>
                    </section>
                
                    <Link to={lp("/blog/articles")} className="detail__backLink">{tr("Retour à la liste des articles", "Back to all articles")}</Link>
                    <header className="detail__header">
                        <img className="" src={article.img} alt={article.alt} loading="eager" fetchpriority="high" />
                        <div>
                            <p>
                                {
                                    article.category.map((cat, index) => (
                                        <span className={`detail__header--category ${cat.class}`} key={index}>{cat.name}</span>
                                    ))
                                }
                            </p>
                            <h1>{article.title}</h1>
                            <p className="detail__header--resume">{article.recap}</p>
                            <p className="detail__header--footer">
                                <span className="card__footer--author">{article.author}</span>
                                <span className="card__footer--date">{article.date}</span>
                                <span className="card__footer--time">{article.time}</span>
                            </p>
                        </div>
                    </header>
                </div>
            </section>

            {/* Contenu article */}
            <section className="detail__content">

                <div className="container">
                    {content && (
                        <div className="detail__content--text">
                            {content.html}
                        </div>
                    )}
                </div>
            </section>

            {/* Navigation */}
            <section className="detail__nav">
                <div className="container">
                    {previousArticle && (
                        <Link
                            to={lp(`/blog/articles/${previousArticle.slug}`)}
                            className="detail__previous"
                        >
                            {tr("Article précédent", "Previous article")}
                        </Link>
                        )}

                        {nextArticle && (
                        <Link
                            to={lp(`/blog/articles/${nextArticle.slug}`)}
                            className="detail__next"
                        >
                            {tr("Article suivant", "Next article")}
                        </Link>
                        )}
                </div>
            </section>
        </main>
    );
};

export default ArticleDetail;
