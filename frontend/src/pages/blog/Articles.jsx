import { Link } from 'react-router-dom';

import HeroBg from '../../components/HeroBg';
import SEOHead from '../../components/SEOHead';

const Articles = () => {
    return (
        <main className="main">
            <SEOHead
                title="Blog LegOmnia : droit OHADA, legaltech et actualité juridique africaine"
                description="Analyses, guides pratiques et veille juridique sur le droit des affaires en Afrique francophone : OHADA, jurisprudence, réglementation par pays."
                canonical="/blog/articles"
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

export default Articles;