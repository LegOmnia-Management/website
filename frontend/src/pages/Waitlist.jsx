import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { joinWaitlist } from '../api/waitlist';

import HeroBg from '../components/HeroBg';
import SEOHead from '../components/SEOHead';

import '../assets/styles/contact.css';

import useLang from '../i18n/useLang';
import { translateApiErrors } from '../i18n/apiErrors';

// options des select (identiques au modèle backend) :
// la valeur envoyée reste en français, seul le libellé est traduit
const PROFILES = [
    { value: "Avocat", en: "Lawyer" },
    { value: "Juriste d'entreprise", en: "In-house counsel" },
    { value: "Magistrat", en: "Judge / Prosecutor" },
    { value: "Notaire / Huissier", en: "Notary / Bailiff" },
    { value: "Administration publique", en: "Public administration" },
    { value: "Enseignant / Chercheur", en: "Lecturer / Researcher" },
    { value: "Étudiant", en: "Student" },
    { value: "Autre", en: "Other" }
];

const COUNTRIES = [
    { value: "Bénin", en: "Benin" },
    { value: "Burkina Faso", en: "Burkina Faso" },
    { value: "Burundi", en: "Burundi" },
    { value: "Cameroun", en: "Cameroon" },
    { value: "Centrafrique", en: "Central African Republic" },
    { value: "Comores", en: "Comoros" },
    { value: "Congo", en: "Congo" },
    { value: "Côte d'Ivoire", en: "Côte d'Ivoire" },
    { value: "Djibouti", en: "Djibouti" },
    { value: "Gabon", en: "Gabon" },
    { value: "Guinée", en: "Guinea" },
    { value: "Guinée équatoriale", en: "Equatorial Guinea" },
    { value: "Madagascar", en: "Madagascar" },
    { value: "Mali", en: "Mali" },
    { value: "Maroc", en: "Morocco" },
    { value: "Mauritanie", en: "Mauritania" },
    { value: "Niger", en: "Niger" },
    { value: "RD Congo", en: "DR Congo" },
    { value: "Rwanda", en: "Rwanda" },
    { value: "Sénégal", en: "Senegal" },
    { value: "Tchad", en: "Chad" },
    { value: "Togo", en: "Togo" },
    { value: "Tunisie", en: "Tunisia" },
    { value: "Algérie", en: "Algeria" },
    { value: "France", en: "France" },
    { value: "Autre", en: "Other" }
];

const PRODUCTS = ["Omnia", "Géode", "Omniscan"];

const Waitlist = () => {

    const { lang, lp, tr } = useLang();

    // requête saisie dans la barre de recherche de l'accueil
    const searchQuery = useLocation().state?.query || "";

    // erreurs renvoyées par l'API
    const [ errors, setErrors ] = useState({});

    // envoi en cours
    const [ isSending, setIsSending ] = useState(false);

    // msg confirmation envoi
    const [ isSubmit, setIsSubmit ] = useState(false);

    // erreur réseau / serveur
    const [ serverError, setServerError ] = useState("");

    // soumission form
    const handleSubmit = async (e) => {
        e.preventDefault();

        // récup données form
        const formData = new FormData(e.target);

        // convertir en JSON (les cases "products" forment un tableau)
        const data = Object.fromEntries(formData.entries());
        data.products = formData.getAll("products");

        setIsSending(true);
        setErrors({});
        setServerError("");

        try {
            await joinWaitlist(data);
            setIsSubmit(true);
            window.scrollTo(0, 0);
        } catch (error) {
            if (error?.errors) {
                setErrors(translateApiErrors(error.errors, lang));
            } else {
                setServerError(tr("Une erreur est survenue. Merci de réessayer ou de nous écrire à contact@legomnia.com.", "An error occurred. Please try again or email us at contact@legomnia.com."));
            }
        } finally {
            setIsSending(false);
        }
    }

    // afficher message confirmation
    if (isSubmit) return (

        <main className="main main__contact">
            <SEOHead
                title={tr("Liste d'attente LegOmnia", "LegOmnia waitlist")}
                description={tr("Inscrivez-vous sur la liste d'attente de LegOmnia.", "Join the LegOmnia waitlist.")}
                canonical="/liste-attente"
                noIndex={true}
            />

            {/* Hero */}
            <section className="hero hero__contact">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            {tr("Merci !", "Thank you!")}
                        </h1>
                        <p className='subtitle'>
                            {tr("Votre inscription sur la liste d'attente est confirmée.", "You're on the waitlist.")}<br/>
                            {tr("Nous vous écrirons dès que votre accès sera disponible.", "We will email you as soon as your access is ready.")}
                        </p>
                        <h3>{tr("En attendant", "In the meantime")}</h3>
                        <p className='subtitle'>
                            {tr("Découvrez nos produits et nos cas d'usage.", "Discover our products and use cases.")}
                        </p>
                    </div>
                    <div className="hero__actions">
                        <Link className='ui__btn' to={lp("/produits/omnia")}>{tr("Découvrir OMNIA", "Discover OMNIA")}</Link>
                        <Link className='ui__btn' to={lp("/produits/transformation-digitale/presentation")}>{tr("Démarrer votre transformation digitale", "Start your digital transformation")}</Link>
                        <Link className='ui__btn' to={lp("/produits/use-cases")}>{tr("Voir nos Use Cases", "See our use cases")}</Link>
                    </div>
                </div>                
            </section>
        </main>
    );

    return (
        <main className="main main__contact">
            <SEOHead
                title={tr("Liste d'attente LegOmnia | Accès anticipé à Omnia", "LegOmnia waitlist | Early access to Omnia")}
                description={tr("Inscrivez-vous sur la liste d'attente de LegOmnia pour obtenir un accès anticipé à Omnia, la plateforme de recherche juridique IA pour l'Afrique francophone.", "Join the LegOmnia waitlist to get early access to Omnia, the AI legal research platform for French-speaking Africa.")}
                canonical="/liste-attente"
            />

            {/* Hero */}
            <section className="hero">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            {tr("Rejoindre la liste d'attente", "Join the waitlist")}
                        </h1>
                        {searchQuery && (
                            <p className='subtitle'>
                                {tr(
                                    <>La recherche «&nbsp;{searchQuery}&nbsp;» sera disponible dans Omnia dès l'ouverture de votre accès.</>,
                                    <>Your search “{searchQuery}” will be available in Omnia as soon as your access opens.</>
                                )}
                            </p>
                        )}
                        <p className='subtitle'>
                            {tr("La plateforme LegOmnia ouvre progressivement ses accès.", "The LegOmnia platform is gradually opening up access.")}<br/>
                            {tr("Inscrivez-vous pour faire partie des premiers utilisateurs, c'est gratuit et sans engagement.", "Sign up to be among the first users — it's free, with no commitment.")}
                        </p>
                    </div>
                </div>                
            </section>

            <section className="contact__content">
                <form className='contact__form' onSubmit={handleSubmit}>
                    <p className="asterisk">{tr("* Champs obligatoires", "* Required fields")}</p>
                    <p className='form__item--half'>
                        <label htmlFor="firstName">{tr("Prénom*", "First name*")}</label>
                        <input 
                            type="text" 
                            id="firstName"
                            name="firstName"
                            placeholder={tr("Votre prénom*", "Your first name*")} 
                            autoComplete="given-name"
                            minLength={2}
                            maxLength={50}
                            required/>
                        <span className="form__item--error">{errors.firstName}</span>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="lastName">{tr("Nom*", "Last name*")}</label>
                        <input 
                            type="text" 
                            id="lastName"
                            name="lastName"
                            placeholder={tr("Votre nom*", "Your last name*")} 
                            autoComplete="family-name"
                            minLength={2}
                            maxLength={50}
                            required/>
                        <span className="form__item--error">{errors.lastName}</span>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="email">{tr("Email professionnel*", "Work email*")}</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder={tr("vous@organisation.com*", "you@organization.com*")} 
                            autoComplete="email"
                            required/>
                        <span className="form__item--error">{errors.email}</span>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="organization">{tr("Organisation", "Organization")}</label>
                        <input 
                            type="text" 
                            id="organization" 
                            name="organization"
                            placeholder={tr("Cabinet, entreprise, institution...", "Law firm, company, institution...")}
                            autoComplete="organization"
                            maxLength={100}/>
                        <span className="form__item--error">{errors.organization}</span>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="profile">{tr("Vous êtes*", "You are*")}</label>
                        <select
                            id="profile" 
                            name="profile"
                            defaultValue=""
                            required>
                            <option value="" disabled hidden>{tr("-- Sélectionnez votre profil --", "-- Select your profile --")}</option>
                            {PROFILES.map(p => <option key={p.value} value={p.value}>{tr(p.value, p.en)}</option>)}
                        </select>
                        <span className="form__item--error">{errors.profile}</span>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="country">{tr("Pays*", "Country*")}</label>
                        <select
                            id="country" 
                            name="country"
                            defaultValue=""
                            autoComplete="country-name"
                            required>
                            <option value="" disabled hidden>{tr("-- Sélectionnez votre pays --", "-- Select your country --")}</option>
                            {COUNTRIES.map(c => <option key={c.value} value={c.value}>{tr(c.value, c.en)}</option>)}
                        </select>
                        <span className="form__item--error">{errors.country}</span>
                    </p>
                    <fieldset className='form__item form__choices'>
                        <legend>{tr("Produits qui vous intéressent", "Products you are interested in")}</legend>
                        {PRODUCTS.map(p => (
                            <label key={p} className='form__choice'>
                                <input type="checkbox" name="products" value={p}/>
                                {p}
                            </label>
                        ))}
                        <span className="form__item--error">{errors.products}</span>
                    </fieldset>

                    {/* Honeypot anti-spam : champ invisible pour un humain, rempli par les bots */}
                    <div className='form__hp' aria-hidden="true">
                        <label htmlFor="website">{tr("Ne pas remplir ce champ", "Do not fill in this field")}</label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            defaultValue=""
                        />
                    </div>

                    <div className='form__consents'>
                        <p className='form__cgu'>
                            <input
                                id="consentAccepted"
                                name="consentAccepted"
                                type="checkbox"
                                required
                            />
                            <label htmlFor="consentAccepted">
                                {tr(
                                    <>J'accepte que LegOmnia utilise ces informations pour me contacter au sujet de mon accès, conformément à la <Link to={lp("/confidentialite")} target="_blank">politique de confidentialité</Link>*</>,
                                    <>I agree that LegOmnia may use this information to contact me about my access, in accordance with the <Link to={lp("/confidentialite")} target="_blank">privacy policy</Link>*</>
                                )}
                            </label>
                            <span className="form__item--error">{errors.consentAccepted}</span>
                        </p>
                        <p className='form__cgu'>
                            <input
                                id="newsletter"
                                name="newsletter"
                                type="checkbox"
                            />
                            <label htmlFor="newsletter">
                                {tr("Je souhaite aussi recevoir les actualités de LegOmnia (désinscription possible à tout moment)", "I would also like to receive LegOmnia news (you can unsubscribe at any time)")}
                            </label>
                        </p>
                    </div>

                    {serverError && <p className="form__item--error" role="alert">{serverError}</p>}

                    <button 
                        type="submit" 
                        className={`ui__btn form__submit ${isSending ? '' : 'isActive'}`}
                        disabled={isSending}
                    >{isSending ? tr("Inscription en cours...", "Signing up...") : tr("M'inscrire sur la liste d'attente", "Join the waitlist")}</button>

                    <p className='form__note'>
                        {tr("Une question\u00a0? Écrivez-nous à", "Any questions? Email us at")} <a href="mailto:contact@legomnia.com">contact@legomnia.com</a>
                    </p>
                </form>
            </section>
        </main>
    );
};

export default Waitlist;
