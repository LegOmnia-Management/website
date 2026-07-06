import { Link } from 'react-router-dom';

import HeroBg from '../../components/HeroBg';
import SEOHead from '../../components/SEOHead';

const Webinaires = () => {
    return (
        <main className="main">
            <SEOHead
                title="Webinaires LegOmnia : droit africain et legaltech"
                description="Participez aux webinaires LegOmnia sur le droit OHADA, la legaltech en Afrique et les outils de recherche juridique pour avocats et juristes."
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

export default Webinaires;