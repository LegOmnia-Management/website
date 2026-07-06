import { Link } from 'react-router-dom';

import HeroBg from '../components/HeroBg';
import SEOHead from '../components/SEOHead';

const Juridictions = () => {
    return (
        <main className="main">
            <SEOHead
                title="Juridictions et pays couverts par LegOmnia"
                description="LegOmnia couvre 17+ pays d'Afrique francophone : OHADA, CEDEAO, CEMAC, UEMOA, jurisprudence CCJA et droits nationaux. Découvrez toutes les juridictions disponibles."
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

export default Juridictions;