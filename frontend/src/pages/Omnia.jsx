import { Link } from 'react-router-dom';

const Omnia = () => {
    return (
        <div className="main">

            {/* Hero */}
            <section className="home__hero">
                <div className="container home__hero__container">
                    <div className="home__hero--title">
                        <h1 className='main-title'>
                        L'intelligence juridique au service des professionnels du droit
                        </h1>
                        <h3 className='subtitle'>LEgOmnia est la première plateforme de recherche et d'analyse juridique dédiée à l'Afrique francophone. Recherche sémantique, analyse IA, génération de mémos — tout ce dont votre cabinet a besoin.</h3>
                    </div>
                    <div className="home__hero--search">
                        <input type="text" placeholder="Que recherchez-vous ?"/>
                        <a href="https://app.beta.legomnia.com/signup" target="_blank">
                            <span className="iconify" data-icon="fa7-solid:magnifying-glass"></span>
                        </a>
                    </div>
                    <div className="home__hero--actions">
                        <Link className='ui__btn' to="/produits/omnia">Découvrir la plateforme</Link>
                        <Link className='ui__btn--inline' to="/contact">Demander une démo</Link>
                    </div>
                    <ul className="home__hero--reassure">
                        <li>Sans engagement</li>
                        <li>Données souveraines</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Omnia;