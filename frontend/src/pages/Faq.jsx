import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import useLang from '../i18n/useLang';
import SEOHead from '../components/SEOHead';
import { FAQ_GROUPS, buildFaqSchema } from '../data/faqs';
import '../assets/styles/faqSection.css';

const Faq = () => {
    const { lang, lp, tr } = useLang();

    return (
        <main className="main">
            <SEOHead
                title={tr("FAQ LegOmnia — Questions fréquentes", "LegOmnia FAQ — Frequently asked questions")}
                description={tr("Retrouvez les réponses aux questions fréquentes sur LegOmnia : fonctionnement, couverture juridique, abonnements et accès à la plateforme de recherche juridique IA.", "Find answers to frequently asked questions about LegOmnia: how it works, legal coverage, subscriptions and access to the AI legal research platform.")}
                canonical="/faq"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(buildFaqSchema(FAQ_GROUPS, lang))}
                </script>
            </Helmet>

            <section className="faqPage">
                <div className="container faqSection__container">
                    <h1 className="main-title">
                        {tr("Questions", "Frequently asked")} <em className="highlight">{tr("fréquentes", "questions")}</em>
                    </h1>

                    {FAQ_GROUPS.map((group) => (
                        <div className="faqPage__group" key={group.key}>
                            <h2>{group.title[lang]}</h2>
                            <div className="faqSection__list">
                                {group.items.map(({ q, a }) => (
                                    <details className="faqSection__item" key={q.fr}>
                                        <summary>{q[lang]}</summary>
                                        <p>{a[lang]}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="faqSection__actions">
                        <Link className="ui__btn" to={lp('/contact')}>
                            {tr("Une autre question ? Contactez-nous", "Another question? Contact us")}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Faq;
