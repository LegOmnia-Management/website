import { Link } from 'react-router-dom';

import HeroBg from '../components/HeroBg';
import useLang from '../i18n/useLang';
import SEOHead from '../components/SEOHead';
import { countryPagePath } from '../data/countryPages';
import { JURISDICTIONS } from '../data/juridictions';

import '../assets/styles/jurisdiction.css';

const Juridictions = () => {
    const { lang, lp, tr } = useLang();

    return (
        <main className="main jurisdiction">
            <SEOHead
                title={tr("Juridictions et pays couverts par LegOmnia", "Jurisdictions and countries covered by LegOmnia")}
                description={tr("LegOmnia couvre 17+ pays d'Afrique francophone : OHADA, CEDEAO, CEMAC, UEMOA, jurisprudence CCJA et droits nationaux. Découvrez toutes les juridictions disponibles.", "LegOmnia covers 17+ French-speaking African countries: OHADA, ECOWAS, CEMAC, WAEMU, CCJA case law and national laws. Discover all available jurisdictions.")}
                canonical="/juridictions"
            />

            {/* Hero */}
            <section className="hero jurisdiction__hero">
                <HeroBg />
                <div className="container">
                    <p className="jurisdiction__eyebrow">{tr("Afrique francophone · espace OHADA", "French-speaking Africa · OHADA area")}</p>
                    <h1 className="jurisdiction__title">{tr("Juridictions couvertes", "Jurisdictions covered")}</h1>
                    <p className="jurisdiction__intro">
                        {tr(
                            "Pour chaque pays : son système juridique, les organisations régionales dont il est membre, la hiérarchie des normes et la place du droit OHADA. De nouvelles juridictions sont ajoutées régulièrement.",
                            "For each country: its legal system, the regional organizations it belongs to, the hierarchy of norms and the role of OHADA law. New jurisdictions are added regularly."
                        )}
                    </p>
                </div>
            </section>

            {/* Pays disponibles */}
            <section className="container jurisdiction__section" aria-labelledby="pays-title">
                <h2 id="pays-title" className="title__h2">{tr("Pays disponibles", "Available countries")}</h2>
                <div className="jurisdiction__list">
                    {Object.entries(JURISDICTIONS).map(([iso, country]) => (
                        <Link key={iso} className="jurisdiction-card" to={countryPagePath(iso, lang)}>
                            <h3>
                                <img src={`https://flagcdn.com/${country.flag}.svg`} alt="" width="32" height="23" />
                                {country.name[lang]}
                            </h3>
                            <p>{country.summary[lang]}</p>
                            <span>{tr("Voir la fiche pays →", "View country page →")}</span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="container jurisdiction__section">
                <div className="jurisdiction__cta">
                    <h2 className="title__h2">{tr("Votre juridiction n'est pas encore listée ?", "Your jurisdiction is not listed yet?")}</h2>
                    <p>
                        {tr(
                            "Rejoignez la liste d'attente : nous publions les fiches pays au fil de l'intégration des corpus nationaux.",
                            "Join the waitlist: we publish country pages as national bodies of law are integrated."
                        )}
                    </p>
                    <div className="jurisdiction__actions">
                        <Link className="ui__btn" to={lp("/liste-attente")}>{tr("Rejoindre la liste d'attente", "Join the waitlist")}</Link>
                    </div>
                </div>
                <div className="jurisdiction__disclaimer" />
            </section>
        </main>
    );
};

export default Juridictions;
