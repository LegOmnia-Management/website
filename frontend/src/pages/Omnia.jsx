import { Link } from 'react-router-dom';

import '../assets/styles/omnia.css';

import HeroBg from '../components/HeroBg';

const Omnia = () => {
    return (
        <div className="main">

            {/* Hero */}
            <section className="home__hero" style={{ paddingBottom: "0" }}>
                <HeroBg />
                <div className="container home__hero__container">
                    <div className="home__hero--title">
                        <h1 className='main-title'>
                        L'intelligence juridique au service des professionnels du droit
                        </h1>
                    </div>
                    <div className="home__hero--actions">
                        <Link className='ui__btn' to="/produits/omnia">Découvrir la plateforme</Link>
                        <Link className='ui__btn--inline' to="/contact">Demander une démo</Link>
                    </div>
                    <ul className="home__hero--reassure">
                        <li>RGPD conforme</li>
                        <li>Droits OHADA</li>
                        <li>17+ pays couverts</li>
                        <li>IA juridique</li>
                    </ul>

                    <div className="omnia__hero--list">
                        <div className="list--animate">
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                OHADA</p>
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                CCJA</p>
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                UEMOA</p>
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                BCEAO</p>
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                CEDEAO</p>
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                CEMAC</p>
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                OAPI</p>
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                CEEAC</p>
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                COMESA</p>
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                UA</p>
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                Côte d'Ivoire</p>
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                Journal Officiel</p>
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                Tribunal de Commerce</p>
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                Bénin</p>
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                Burkina Faso</p>
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                Cameroun</p>
                            <p>
                                <span className="iconify" data-icon="arcticons:consorsbank-secureplus"></span>
                                Congo</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero */}
            <section className="omnia__presentation">

            </section>
        </div>
    );
};

export default Omnia;