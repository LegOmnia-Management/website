import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import HeroBg from '../../components/HeroBg';
import useLang from '../../i18n/useLang';
import SEOHead from '../../components/SEOHead';

import './Newsletter.css';

import NewsletterBanniere from '../../assets/img/divers/newsletter-banniere.webp';

// Formulaire d'abonnement hébergé par Brevo
const SUBSCRIBE_URL = "https://4e427ef9.sibforms.com/serve/MUIFAPDN2gwe8jwDZl0aGcie0B3uC75gy81BpmfTjDjaZMl4l2UDQ8V4pBMHQXkv0K7ztKLUiG_HuSCfjUcynsor_GEADxz8vheB2F4VXt163RpFmARqeijLgEAbkHwWxMeoMv8ak1CAky9tyI9raej5kIGw3aH0E8OFjKfzh7-4S9YrHzGadwd6vcFG3tbZPAndWrX4aDMLkOxzpQ==";

// Éditions de la newsletter : la page de chaque édition est une page statique (public/newsletter/...)
const EDITIONS = [
    {
        id: 'numero-2',
        number: '2',
        href: '/newsletter/numero-2/',
        date: { fr: 'Semaine du 2 au 9 novembre 2026', en: 'Week of 2 to 9 November 2026' },
        title: {
            fr: "La Revue de Presse Juridique d'Afrique Francophone",
            en: "The Legal Press Review of French-speaking Africa",
        },
        intro: {
            fr: "Après les annonces, les décrets : l'État s'installe en opérateur économique. Dix autres sujets de la semaine, sourcés.",
            en: "After the announcements, the decrees: the State steps in as an economic operator. Ten other stories of the week, sourced.",
        },
    },
];

const Newsletter = () => {
    const { lp, tr } = useLang();

    return (
        <main className="main">
            <SEOHead
                title={tr("Newsletter juridique Afrique francophone | LegOmnia", "Legal newsletter for French-speaking Africa | LegOmnia")}
                description={tr(
                    "La revue de presse juridique hebdomadaire de LegOmnia : l'actualité du droit en Afrique francophone, sourcée et vérifiée.",
                    "LegOmnia's weekly legal press review: the news of law in French-speaking Africa, sourced and checked."
                )}
                canonical="/blog/newsletter"
            />

            {/* Hero */}
            <section className="hero nl-hero">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            Newsletter <em className='highlight'>{tr("juridique", "legal")}</em>
                        </h1>
                        <p>
                            {tr(
                                "Chaque semaine, les textes, décisions et réformes de l'Afrique francophone, sourcés et vérifiés.",
                                "Every week, the texts, decisions and reforms of French-speaking Africa, sourced and checked."
                            )}
                        </p>
                    </div>
                </div>
            </section>

            {/* Éditions */}
            <section className="container nl-list">
                {EDITIONS.map((edition) => (
                    <Fragment key={edition.id}>
                    <div className="nl-banner">
                        <img src={NewsletterBanniere} alt={tr("Illustration de la newsletter juridique LegOmnia", "Illustration of the LegOmnia legal newsletter")} />
                    </div>
                    <article className="nl-card">
                        <div className="nl-card__cover">
                            <p className="nl-card__issue">
                                n°{edition.number}
                            </p>
                        </div>

                        <div className="nl-card__body">
                            <p className="nl-card__date">{tr(edition.date.fr, edition.date.en)}</p>
                            <h2 className="nl-card__title">{tr(edition.title.fr, edition.title.en)}</h2>
                            <p className="nl-card__intro">{tr(edition.intro.fr, edition.intro.en)}</p>
                            <a className='ui__btn nl-card__btn' href={edition.href}>{tr("Lire l'édition", "Read the issue")}</a>
                        </div>
                    </article>
                    </Fragment>
                ))}

                {/* Abonnement */}
                <section className="nl-subscribe">
                    <h2>{tr("Recevoir la newsletter", "Get the newsletter")}</h2>
                    <p>
                        {tr(
                            "Une fois par semaine, les textes et décisions de l'Afrique francophone, directement dans votre boîte mail.",
                            "Once a week, the texts and decisions of French-speaking Africa, straight to your inbox."
                        )}
                    </p>
                    <a className='ui__btn' href={SUBSCRIBE_URL} target="_blank" rel="noopener noreferrer">
                        {tr("S'abonner", "Subscribe")}
                    </a>
                </section>

                <p className="nl-back">
                    <Link to={lp("/")}>{tr("Retour à l'accueil", "Back to home")}</Link>
                </p>
            </section>
        </main>
    );
};

export default Newsletter;
