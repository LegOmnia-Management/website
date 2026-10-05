import { Link } from 'react-router-dom';

import HeroBg from '../../components/HeroBg';
import useLang from '../../i18n/useLang';
import SEOHead from '../../components/SEOHead';

const Webinaires = () => {
    const { lp, tr } = useLang();

    return (
        <main className="main">
            <SEOHead
                title={tr("Webinaires LegOmnia : droit africain et legaltech", "LegOmnia webinars: African law and legaltech")}
                description={tr("Participez aux webinaires LegOmnia sur le droit OHADA, la legaltech en Afrique et les outils de recherche juridique pour avocats et juristes.", "Join LegOmnia webinars on OHADA law, legaltech in Africa and legal research tools for lawyers and in-house counsel.")}
                canonical="/blog/webinaires"
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

export default Webinaires;