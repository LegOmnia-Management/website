import { Link } from 'react-router-dom';

import HeroBg from '../components/HeroBg';
import useLang from '../i18n/useLang';
import SEOHead from '../components/SEOHead';

const Faq = () => {
    const { lp, tr } = useLang();

    return (
        <main className="main">
            <SEOHead
                title={tr("FAQ LegOmnia — Questions fréquentes", "LegOmnia FAQ — Frequently asked questions")}
                description={tr("Retrouvez les réponses aux questions fréquentes sur LegOmnia : fonctionnement, couverture juridique, abonnements et accès à la plateforme de recherche juridique IA.", "Find answers to frequently asked questions about LegOmnia: how it works, legal coverage, subscriptions and access to the AI legal research platform.")}
                canonical="/faq"
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

export default Faq;