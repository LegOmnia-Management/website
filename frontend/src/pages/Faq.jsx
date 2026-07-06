import { Link } from 'react-router-dom';

import HeroBg from '../components/HeroBg';
import SEOHead from '../components/SEOHead';

const Faq = () => {
    return (
        <main className="main">
            <SEOHead
                title="FAQ LegOmnia — Questions fréquentes"
                description="Retrouvez les réponses aux questions fréquentes sur LegOmnia : fonctionnement, couverture juridique, abonnements et accès à la plateforme de recherche juridique IA."
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
                            Page <em className='highlight'>bientôt disponible</em>
                        </h1>
                    </div>
                    <div className="hero__actions">
                        <Link className='ui__btn' to="/">Retour à l'accueil</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Faq;