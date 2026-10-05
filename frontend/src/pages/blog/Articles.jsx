import { Link } from 'react-router-dom';

import '../../assets/styles/general.css';
import '../../assets/styles/blog.css';

import { articles, localizeArticle } from './ArticlesList';

import HeroBg from '../../components/HeroBg';
import SEOHead from '../../components/SEOHead';
import useLang from '../../i18n/useLang';

const Articles = () => {

    const { lang, lp, tr } = useLang();

    return (
        <main className="main">
            <SEOHead
                title={tr("Blog LegOmnia : droit OHADA, legaltech et actualité juridique africaine", "LegOmnia blog: OHADA law, legaltech and African legal news")}
                description={tr("Analyses, guides pratiques et veille juridique sur le droit des affaires en Afrique francophone : OHADA, jurisprudence, réglementation par pays.", "Analysis, practical guides and legal monitoring on business law in French-speaking Africa: OHADA, case law, regulations by country.")}
                canonical="/blog/articles"
            />

            {/* Hero */}
            <section className="hero">
                <HeroBg />
                <div className="container hero__container">
                <div className="hero__title">
                        <h1 className='main-title'>
                            {tr("Le blog d'intelligence juridique", "The legal intelligence blog")} <br/>
                            <em className='highlight'>{tr("au service de l'Afrique Francophone", "serving French-speaking Africa")}</em>
                        </h1>
                        <h2 className='subtitle'>{tr("Découvrez nos derniers articles et actualités sur la transformation digitale des institutions juridiques.", "Discover our latest articles and news on the digital transformation of legal institutions.")}</h2>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <section className="breadcrumb">
                <div className="container">
                    <nav aria-label={tr("Fil d'Ariane", "Breadcrumb")}>
                        <Link to={lp("/")}>{tr("Accueil", "Home")}</Link> {'>'} <span>Articles</span>
                    </nav>
                </div>
            </section>

             {/* filtres 
             <section className="articles__filters">
                <div className="container"></div>
             </section>*/}

            {/* Liste articles */}
            <section className="articles__content">
                <div className="container">
                    <div className="articles__content--list">
                        {
                            articles.map(item => localizeArticle(item, lang)).map(article => (
                                <Link to={lp(`/blog/articles/${article.slug}`)} className='articles__card--link' key={article.id}>
                                    <article className='articles__card' lang={article.lang}>
                                        <img className="articles__card--img" src={article.img} alt={article.alt} />
                                        <div className="articles__card--content">
                                            <header className="articles__card--header">
                                                <p className="card__header--categories">
                                                {
                                                    article.category.map((cat, index) => (
                                                        <span className={`card__header--category ${cat.class}`} key={index}>{cat.name}</span>
                                                ))}
                                                </p>
                                                <h3 className="card__header--title">{article.title}</h3>
                                            </header>
                                            <p className="card__text">{article.recap}</p>
                                            <footer className="articles__card--footer">
                                                <p className="card__footer--author">{article.author}</p>
                                                <p className="card__footer--date">{article.date}</p>
                                                <p className="card__footer--time">{article.time}</p>
                                            </footer>
                                        </div>
                                    </article>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Articles;