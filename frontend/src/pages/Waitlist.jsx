import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { joinWaitlist } from '../api/waitlist';

import HeroBg from '../components/HeroBg';
import SEOHead from '../components/SEOHead';

import '../assets/styles/contact.css';

// options des select (identiques au modèle backend)
const PROFILES = [
    "Avocat",
    "Juriste d'entreprise",
    "Magistrat",
    "Notaire / Huissier",
    "Administration publique",
    "Enseignant / Chercheur",
    "Étudiant",
    "Autre"
];

const COUNTRIES = [
    "Bénin",
    "Burkina Faso",
    "Burundi",
    "Cameroun",
    "Centrafrique",
    "Comores",
    "Congo",
    "Côte d'Ivoire",
    "Djibouti",
    "Gabon",
    "Guinée",
    "Guinée équatoriale",
    "Madagascar",
    "Mali",
    "Maroc",
    "Mauritanie",
    "Niger",
    "RD Congo",
    "Rwanda",
    "Sénégal",
    "Tchad",
    "Togo",
    "Tunisie",
    "Algérie",
    "France",
    "Autre"
];

const PRODUCTS = ["Omnia", "Géode", "Omniscan"];

const Waitlist = () => {

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
                setErrors(error.errors);
            } else {
                setServerError("Une erreur est survenue. Merci de réessayer ou de nous écrire à contact@legomnia.com.");
            }
        } finally {
            setIsSending(false);
        }
    }

    // afficher message confirmation
    if (isSubmit) return (

        <main className="main main__contact">
            <SEOHead
                title="Liste d'attente LegOmnia"
                description="Inscrivez-vous sur la liste d'attente de LegOmnia."
                canonical="/liste-attente"
                noIndex={true}
            />

            {/* Hero */}
            <section className="hero hero__contact">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            Merci&nbsp;!
                        </h1>
                        <p className='subtitle'>
                            Votre inscription sur la liste d'attente est confirmée.<br/>
                            Nous vous écrirons dès que votre accès sera disponible.
                        </p>
                        <h3>En attendant</h3>
                        <p className='subtitle'>
                            Découvrez nos produits et nos cas d'usage.
                        </p>
                    </div>
                    <div className="hero__actions">
                        <Link className='ui__btn' to="/produits/omnia">Découvrir OMNIA</Link>
                        <Link className='ui__btn' to="/produits/transformation-digitale/presentation">Démarrer votre transformation digitale</Link>
                        <Link className='ui__btn' to="/produits/use-cases">Voir nos Use Cases</Link>
                    </div>
                </div>                
            </section>
        </main>
    );

    return (
        <main className="main main__contact">
            <SEOHead
                title="Liste d'attente LegOmnia | Accès anticipé à Omnia"
                description="Inscrivez-vous sur la liste d'attente de LegOmnia pour obtenir un accès anticipé à Omnia, la plateforme de recherche juridique IA pour l'Afrique francophone."
                canonical="/liste-attente"
            />

            {/* Hero */}
            <section className="hero">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            Rejoindre la liste d'attente
                        </h1>
                        {searchQuery && (
                            <p className='subtitle'>
                                La recherche «&nbsp;{searchQuery}&nbsp;» sera disponible dans Omnia dès l'ouverture de votre accès.
                            </p>
                        )}
                        <p className='subtitle'>
                            La plateforme LegOmnia ouvre progressivement ses accès.<br/>
                            Inscrivez-vous pour faire partie des premiers utilisateurs, c'est gratuit et sans engagement.
                        </p>
                    </div>
                </div>                
            </section>

            <section className="contact__content">
                <form className='contact__form' onSubmit={handleSubmit}>
                    <p className="asterisk">* Champs obligatoires</p>
                    <p className='form__item--half'>
                        <label htmlFor="firstName">Prénom*</label>
                        <input 
                            type="text" 
                            id="firstName"
                            name="firstName"
                            placeholder="Votre prénom*" 
                            autoComplete="given-name"
                            minLength={2}
                            maxLength={50}
                            required/>
                        <span className="form__item--error">{errors.firstName}</span>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="lastName">Nom*</label>
                        <input 
                            type="text" 
                            id="lastName"
                            name="lastName"
                            placeholder="Votre nom*" 
                            autoComplete="family-name"
                            minLength={2}
                            maxLength={50}
                            required/>
                        <span className="form__item--error">{errors.lastName}</span>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="email">Email professionnel*</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder="vous@organisation.com*" 
                            autoComplete="email"
                            required/>
                        <span className="form__item--error">{errors.email}</span>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="organization">Organisation</label>
                        <input 
                            type="text" 
                            id="organization" 
                            name="organization"
                            placeholder="Cabinet, entreprise, institution..."
                            autoComplete="organization"
                            maxLength={100}/>
                        <span className="form__item--error">{errors.organization}</span>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="profile">Vous êtes*</label>
                        <select
                            id="profile" 
                            name="profile"
                            defaultValue=""
                            required>
                            <option value="" disabled hidden>-- Sélectionnez votre profil --</option>
                            {PROFILES.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                        <span className="form__item--error">{errors.profile}</span>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="country">Pays*</label>
                        <select
                            id="country" 
                            name="country"
                            defaultValue=""
                            autoComplete="country-name"
                            required>
                            <option value="" disabled hidden>-- Sélectionnez votre pays --</option>
                            {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <span className="form__item--error">{errors.country}</span>
                    </p>
                    <fieldset className='form__item form__choices'>
                        <legend>Produits qui vous intéressent</legend>
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
                        <label htmlFor="website">Ne pas remplir ce champ</label>
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
                                J'accepte que LegOmnia utilise ces informations pour me contacter au sujet de mon accès, conformément à la <Link to="/confidentialite" target="_blank">politique de confidentialité</Link>*
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
                                Je souhaite aussi recevoir les actualités de LegOmnia (désinscription possible à tout moment)
                            </label>
                        </p>
                    </div>

                    {serverError && <p className="form__item--error" role="alert">{serverError}</p>}

                    <button 
                        type="submit" 
                        className={`ui__btn form__submit ${isSending ? '' : 'isActive'}`}
                        disabled={isSending}
                    >{isSending ? "Inscription en cours..." : "M'inscrire sur la liste d'attente"}</button>

                    <p className='form__note'>
                        Une question&nbsp;? Écrivez-nous à <a href="mailto:contact@legomnia.com">contact@legomnia.com</a>
                    </p>
                </form>
            </section>
        </main>
    );
};

export default Waitlist;
