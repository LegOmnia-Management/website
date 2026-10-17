import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import useLang from '../i18n/useLang';
import { getFaqGroup, buildFaqSchema } from '../data/faqs';
import '../assets/styles/faqSection.css';

/**
 * 5 questions/réponses en bas de page + bouton « Lire plus » vers la FAQ complète.
 *   <FaqSection group="omnia" />
 */
const FaqSection = ({ group }) => {
    const { lang, lp, tr } = useLang();
    const data = getFaqGroup(group);
    if (!data) return null;

    return (
        <section className="faqSection" aria-labelledby={`faq-${group}`}>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(buildFaqSchema([data], lang))}
                </script>
            </Helmet>
            <div className="container faqSection__container">
                <h2 id={`faq-${group}`} className="faqSection__title">
                    {tr("Questions fréquentes", "Frequently asked questions")}
                </h2>
                <div className="faqSection__list">
                    {data.items.map(({ q, a }) => (
                        <details className="faqSection__item" key={q.fr}>
                            <summary>{q[lang]}</summary>
                            <p>{a[lang]}</p>
                        </details>
                    ))}
                </div>
                <div className="faqSection__actions">
                    <Link className="ui__btn" to={lp('/faq')}>{tr("Lire plus", "Read more")}</Link>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
