import { Link } from 'react-router-dom';

import HeroBg from '../../components/HeroBg';
import useLang from '../../i18n/useLang';
import SEOHead from '../../components/SEOHead';

const Ressources = () => {
    const { lp, tr } = useLang();

    return (
        <main className="main">
            <SEOHead
                title={tr("Ressources juridiques Afrique francophone | LegOmnia", "Legal resources for French-speaking Africa | LegOmnia")}
                description={tr("Fiches pays, glossaire juridique et guides pratiques sur le droit OHADA, CEDEAO, CEMAC et les systèmes juridiques d'Afrique francophone.", "Country profiles, legal glossary and practical guides on OHADA, ECOWAS and CEMAC law and the legal systems of French-speaking Africa.")}
                canonical="/blog/ressources"
            />

            {/* Hero */}
            <section className="hero"
                style={{
                    height: "calc(100vh - 400px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "3rem"
                }}>
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            Page <em className='highlight'>{tr("bientôt disponible", "coming soon")}</em>
                        </h1>
                    </div>
                    <div className="hero__actions">
                        <Link className='ui__btn' to={lp("/")}>{tr("Retour à l'accueil", "Back to home")}</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Ressources;