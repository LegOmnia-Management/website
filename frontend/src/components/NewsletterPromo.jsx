import { Link } from 'react-router-dom';

import useLang from '../i18n/useLang';

import './NewsletterPromo.css';

// Formulaire d'abonnement hébergé par Brevo
const SUBSCRIBE_URL = "https://4e427ef9.sibforms.com/serve/MUIFAPDN2gwe8jwDZl0aGcie0B3uC75gy81BpmfTjDjaZMl4l2UDQ8V4pBMHQXkv0K7ztKLUiG_HuSCfjUcynsor_GEADxz8vheB2F4VXt163RpFmARqeijLgEAbkHwWxMeoMv8ak1CAky9tyI9raej5kIGw3aH0E8OFjKfzh7-4S9YrHzGadwd6vcFG3tbZPAndWrX4aDMLkOxzpQ==";

/* Bloc de promotion de la newsletter (accueil) */
const NewsletterPromo = () => {
    const { lp, tr } = useLang();

    return (
        <section className="nl-promo">
            <div className="container nl-promo__inner">
                <p className="nl-promo__kicker">{tr("Newsletter", "Newsletter")}</p>
                <h2 className="nl-promo__title">
                    {tr("La revue de presse juridique de l'Afrique francophone", "The legal press review of French-speaking Africa")}
                </h2>
                <p className="nl-promo__text">
                    {tr(
                        "Chaque semaine, les textes, décisions et réformes qui comptent, sourcés et vérifiés, dans votre boîte mail.",
                        "Every week, the texts, decisions and reforms that matter, sourced and checked, in your inbox."
                    )}
                </p>
                <div className="nl-promo__actions">
                    <a className="ui__btn" href={SUBSCRIBE_URL} target="_blank" rel="noopener noreferrer">
                        {tr("S'abonner", "Subscribe")}
                    </a>
                    <Link className="ui__btn--inline" to={lp("/blog/newsletter")}>
                        {tr("Voir la newsletter", "See the newsletter")}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewsletterPromo;
