import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import '../../assets/styles/general.css';
import '../../assets/styles/blog.css';

import { articles, articlesContent } from './ArticlesList';

import HeroBg from '../../components/HeroBg';
import SEOHead from '../../components/SEOHead';

const ArticleDetail = () => {

    // recup slug article en cours
    const { slug } = useParams();

    // recup article en cours
    const article = articles.find(a => a.slug === slug);
    const content = articlesContent.find(c => c.slug === slug);

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
    
    useEffect(() => {
        document.documentElement.lang = article.lang || 'fr'; 
    }, [article]);

    // article introuvable -> redirection vers la liste
    if (!article) {
        return <Navigate to="/blog/articles" replace />;
    }

    return (
        <main className="main detailArticle">

            <SEOHead
                title={`${article.title} | Blog LegOmnia`}
                description={article.recap}
                canonical={`/blog/articles/${article.slug}`}
                image={article.img}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://legomnia.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://legomnia.com/blog" },
                            { "@type": "ListItem", "position": 3, "name": "Articles", "item": "https://legomnia.com/blog/articles" },
                            { "@type": "ListItem", "position": 4, "name": article.title, "item": `https://legomnia.com/blog/articles/${article.slug}` }
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
                            "@id": `https://legomnia.com/blog/articles/${article.slug}`
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
                        <nav aria-label="Fil d'Ariane">
                            <Link to="/">Accueil</Link> {'>'} <Link to="/blog">Blog</Link> {'>'} <Link to="/blog/articles">Articles</Link> {'>'} <span>{article.title}</span>
                        </nav>
                    </section>
                
                    <Link to="/blog/articles" className="detail__backLink">Retour à la liste des articles</Link>
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
                            to={`/blog/articles/${previousArticle.slug}`}
                            className="detail__previous"
                        >
                            Article précédent
                        </Link>
                        )}

                        {nextArticle && (
                        <Link
                            to={`/blog/articles/${nextArticle.slug}`}
                            className="detail__next"
                        >
                            Article suivant
                        </Link>
                        )}
                </div>
            </section>
        </main>
    );
};

export default ArticleDetail;
