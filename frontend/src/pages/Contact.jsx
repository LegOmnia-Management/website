import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { createContact } from '../api/contact';

import HeroBg from '../components/HeroBg';
import SEOHead from '../components/SEOHead';

import '../assets/styles/contact.css';

import useLang from '../i18n/useLang';
import { translateApiErrors } from '../i18n/apiErrors';

// Sujets : la valeur (envoyée à l'API) reste en français, seul le libellé est traduit
const SUBJECTS = [
    { value: "Demande d'information", en: "Information request" },
    { value: "Demande de démo", en: "Demo request" },
    { value: "Partenariat", en: "Partnership" },
    { value: "Support technique", en: "Technical support" },
    { value: "Autre", en: "Other" },
];

const Contact = () => {

    const { lang, lp, tr } = useLang();

    // stocker erreurs
    const [ datas, setDatas ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        cguAccepted: ""
    });

    // stocker champs vides
    const [ fields, setFields ] = useState({
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        subject: true,
        message: true,
        cguAccepted: true
    });

    // visibilité btn submit
    const [ isActive, setIsActive ] = useState(false);

    // msg confirmation envoi
    const [ isSubmit, setIsSubmit ] = useState(false);

    // verif valeur des champs
    // label : [libellé FR, libellé EN] du champ
    const validateItem = (value, name, label = ["", ""]) => {

        let msg = "";
        let empty = {...fields};

        switch(name) {
            case "firstName":
            case "lastName":
                if ( !value || value.trim().length === 0 ){
                    msg =  tr(`Le ${label[0]} est obligatoire`, `${label[1]} is required`);
                    empty[name] = true;
                } else {
                    if ( value && value.trim().length < 2 ){
                        msg =  tr(`Le ${label[0]} doit contenir 2 caractères minimum`, `${label[1]} must be at least 2 characters long`);
                    } else {
                        msg = "";
                    }
                    empty[name] = false;
                }
                break;
            case "email":
                if ( !value || value.trim().length === 0 ){
                    msg =  tr("L'email est obligatoire", "Email is required");
                    empty[name] = true;
                } else {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    
                    if (!emailRegex.test(value)) {
                        msg = tr("L'email est invalide", "Email is invalid");
                    } else {
                        msg =  "";
                    }
                    empty[name] = false;
                }
                break;
            case "phone":
                if ( !value || value.trim().length === 0 ){
                    msg =  tr("Le numéro de téléphone est obligatoire", "Phone number is required");
                    empty[name] = true;
                } else {
                    const phoneRegex = /^\+?[0-9 ]{7,20}$/;
                    
                    if (!phoneRegex.test(value)) {
                        msg = tr("Le numéro de téléphone est invalide", "Phone number is invalid");
                    } else {
                        msg =  "";
                    }
                    empty[name] = false;
                }
                break;
            case "company":
                if ( value && value.trim().length < 2 ){
                    msg =  tr("L'entreprise doit contenir 2 caractères minimum", "Company must be at least 2 characters long");
                } else {
                    msg = "";
                }
                break;
            case "subject":
                if ( !value || value.trim().length === 0 ){
                    msg =  tr("Le sujet est obligatoire", "Subject is required");
                    empty[name] = true;
                } else {
                    if ( !SUBJECTS.some(subject => subject.value === value) ) {
                        msg =  tr("Veuillez choisir le sujet parmi la liste proposée", "Please choose a subject from the list");
                    } else {
                        msg =  "";
                    }
                    empty[name] = false;
                }
                break;
            case "message" :
                if ( !value || value.trim().length === 0 ){
                    msg =  tr("Le message est obligatoire", "Message is required");
                    empty[name] = true;
                } else {
                    if ( value.trim().length < 10 ){
                        msg =  tr("Le message doit contenir 10 caractères minimum", "Message must be at least 10 characters long");
                    } else {
                        msg =  "";
                    }
                    empty[name] = false;
                }
                break;
            default :
                msg = "";
                empty[name] = false;
        }

        // stocker erreurs
        setDatas(prev => ({
            ...prev,
            [name]: msg
        }));

        // stocker champs vides
        setFields(empty);
    }

    // soumission form
    const handleSubmit = async (e) => {
        e.preventDefault();

        // récup données form
        const formData = new FormData(e.target);

        // convertir en JSON
        const data = Object.fromEntries(formData.entries());

        try {
            // envoi à l'API
            const response = await createContact(data);
    
            // afficher msg confirmation
            setIsSubmit(true);
        } catch (error) {

            if (error.errors) {
                // stocker les erreurs
                setDatas(prev => ({ ...prev, ...translateApiErrors(error.errors, lang) })); 
            } else {
                console.error("Erreur lors de la création du contact :", error);
            }
        }
    }

    // verif msg erreur pour chaque champ
    const hasErrors = () => {

        return Object.values(datas).some(error => error !== "");
    }

    // verif si champs obligatoires vides
    const hasFieldEmpty = () => {

        return Object.values(fields).some(status => status === true);
    }

    useEffect(() => {
        const errorsExist = hasErrors();
        const emptyFieldsExist = hasFieldEmpty();
    
        if (!errorsExist && !emptyFieldsExist) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [datas, fields]);

    // afficher message confirmation
    if (isSubmit) return (

        <main className="main main__contact">

            {/* Hero */}
            <section className="hero hero__contact">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            {tr("Nous contacter", "Contact us")}
                        </h1>
                        <p className='subtitle'>
                            {tr("Votre demande a bien été prise en compte.", "Your request has been received.")}<br/>
                            {tr("Nous vous recontacterons dans les plus brefs délais.", "We will get back to you as soon as possible.")}
                        </p>
                        <h3>{tr("En attendant", "In the meantime")}</h3>
                        <p className='subtitle'>
                            {tr("Nous vous invitons à parcourir notre site pour découvrir nos produits.", "Feel free to browse our website to discover our products.")}
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
                title={tr("Contacter l'équipe LegOmnia | Demander une démo", "Contact the LegOmnia team | Request a demo")}
                description={tr("Une question sur la plateforme, un partenariat, une démonstration ? Contactez l'équipe LegOmnia, basée à Paris et tournée vers l'Afrique francophone.", "A question about the platform, a partnership, a demo? Contact the LegOmnia team, based in Paris and focused on French-speaking Africa.")}
                canonical="/contact"
            />

            {/* Hero */}
            <section className="hero">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            {tr("Nous contacter", "Contact us")}
                        </h1>
                        <p className='subtitle'>
                        {tr("Vous avez une question ou souhaitez en savoir plus sur nos solutions ?", "Have a question or want to learn more about our solutions?")}<br/>
                        {tr("Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.", "Fill in the form below and we will get back to you quickly.")}
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
                            required
                            onChange={e => validateItem(e.target.value, e.target.name, ["prénom", "First name"])}/>
                        <span className="form__item--error">{datas.firstName}</span>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="lastName">{tr("Nom*", "Last name*")}</label>
                        <input 
                            type="text" 
                            id="lastName"
                            name="lastName"
                            placeholder={tr("Votre nom*", "Your last name*")} 
                            required
                            onChange={e => validateItem(e.target.value, e.target.name, ["nom", "Last name"])}/>
                        <span className="form__item--error">{datas.lastName}</span>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="email">Email*</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder={tr("Votre email*", "Your email*")} 
                            required
                            onChange={e => validateItem(e.target.value, e.target.name)}/>
                        <span className="form__item--error">{datas.email}</span>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="phone">{tr("Téléphone*", "Phone*")}</label>
                        <input 
                            type="tel" 
                            id="phone"
                            name="phone"
                            pattern="^\+?[0-9 ]{7,20}$"
                            placeholder={tr("Votre numéro de téléphone*", "Your phone number*")} 
                            required
                            onChange={e => validateItem(e.target.value, e.target.name)}/>
                        <span className="form__item--error">{datas.phone}</span>
                    </p>
                    <p className='form__item'>
                        <label htmlFor="company">{tr("Entreprise", "Company")}</label>
                        <input 
                            type="text" 
                            id="company" 
                            name="company"
                            placeholder={tr("Entreprise", "Company")}
                            onChange={e => validateItem(e.target.value, e.target.name)}/>
                        <span className="form__item--error">{datas.company}</span>
                    </p>
                    <p className='form__item'>
                        <label htmlFor="subject">{tr("Sujet*", "Subject*")}</label>
                        <select
                            id="subject" 
                            name="subject"
                            defaultValue=""
                            required
                            onChange={e => validateItem(e.target.value, e.target.name)}>
                            <option value="" disabled hidden>{tr("-- Sélectionnez un sujet --", "-- Select a subject --")}</option>
                            {SUBJECTS.map(subject => (
                                <option key={subject.value} value={subject.value}>{tr(subject.value, subject.en)}</option>
                            ))}
                        </select>
                        <span className="form__item--error">{datas.subject}</span>
                    </p>
                    <p className='form__item'>
                        <label htmlFor="message">Message*</label>
                        <textarea 
                            type="text" 
                            id="message"
                            name="message"
                            placeholder={tr("Votre message*", "Your message*")} 
                            rows="10"
                            onChange={e => validateItem(e.target.value, e.target.name)}></textarea>
                        <span className="form__item--error">{datas.message}</span>
                    </p>

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

                    <div className='form__footer'>
                        <p className='form__cgu'>
                            <input
                                id="cguAccepted"
                                name="cguAccepted"
                                type="checkbox"
                                onChange={e => validateItem(e.target.checked, e.target.name)}
                            />
                            <label htmlFor="check">{tr("J'accepte les CGU", "I accept the terms of use")}</label>
                            <span className="form__item--error">{datas.cguAccepted}</span>
                        </p>
                    </div>

                    <button 
                        type="submit" 
                        className={`ui__btn form__submit ${isActive ? 'isActive' : ""}`}
                    >{tr("Envoyer le message", "Send message")}</button>
                </form>
            </section>
        </main>
    );
};

export default Contact;