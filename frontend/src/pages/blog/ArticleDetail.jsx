import { Link, useParams } from "react-router-dom";

import '../../assets/styles/blog.css';

import { articles, articlesContent } from './ArticlesList';

import HeroBg from '../../components/HeroBg';

const ArticleDetail = () => {

    // recup id article en cours
    const { id } = useParams();

    // recup index article en cours
    const currentIndex = articles.findIndex(
        article => article.id === parseInt(id)
    );
    
    // recup article en cours
    //const currentArticle = articles[currentIndex];
    
    // recup article precedent
    const previousArticle = currentIndex > 0
        ? articles[currentIndex - 1]
        : null;
    
    // recup article suivant
    const nextArticle = currentIndex < articles.length - 1
        ? articles[currentIndex + 1]
        : null;

    return (
        <main className="main detailArticle">

            {/* Hero */}
            <section className="hero">
                <HeroBg />
                <div className="container container__hero">
                    <Link to="/blog/articles" className="detail__backLink">Retour à la liste des articles</Link>
                    { articles
                        .filter(article => article.id === parseInt(id))
                        .map(article => (
                            <header className="detail__header" key={id}>
                                <img className="" src={article.img} alt={article.alt} loading="lazy" />
                                <div>
                                    <p>
                                        {
                                            article.category.map((cat, index) => (
                                                <span className={`detail__header--category ${cat.class}`} key={index}>{cat.name}</span>
                                            )
                                        )}
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
                        ))
                    }
                </div>
            </section>

            {/* Contenu article */}
            <section className="detail__content">
                <div className="container">
                    {articlesContent
                        .filter(content => content.id === parseInt(id))
                        .map(content => (
                            <div className="detail__content--text" key={content.id}>
                                {content.html}
                            </div>
                        ))
                    }
                </div>
            </section>

            {/* Navigation */}
            <section className="detail__nav">
                <div className="container">
                    {previousArticle && (
                        <Link
                            to={`/blog/articles/${previousArticle.id}`}
                            className="detail__previous"
                        >
                            Article précédent
                        </Link>
                        )}

                        {nextArticle && (
                        <Link
                            to={`/blog/articles/${nextArticle.id}`}
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