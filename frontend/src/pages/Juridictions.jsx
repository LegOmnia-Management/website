import { Link } from 'react-router-dom';

import HeroBg from '../components/HeroBg';
import useLang from '../i18n/useLang';
import SEOHead from '../components/SEOHead';

const Juridictions = () => {
    const { lp, tr } = useLang();

    return (
        <main className="main">
            <SEOHead
                title={tr("Juridictions et pays couverts par LegOmnia", "Jurisdictions and countries covered by LegOmnia")}
                description={tr("LegOmnia couvre 17+ pays d'Afrique francophone : OHADA, CEDEAO, CEMAC, UEMOA, jurisprudence CCJA et droits nationaux. Découvrez toutes les juridictions disponibles.", "LegOmnia covers 17+ French-speaking African countries: OHADA, ECOWAS, CEMAC, WAEMU, CCJA case law and national laws. Discover all available jurisdictions.")}
                canonical="/juridictions"
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

export default Juridictions;