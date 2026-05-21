import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { createContact } from '../api/contact';

import HeroBg from '../components/HeroBg';

import '../assets/styles/contact.css';

const Contact = () => {

    // stocker erreurs
    const [ datas, setDatas ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
    });

    // stocker champs vides
    const [ fields, setFields ] = useState({
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        subject: true,
        message: true
    });

    // visibilité btn submit
    const [ isActive, setIsActive ] = useState(false);

    // msg confirmation envoi
    const [ isSubmit, setIsSubmit ] = useState(false);

    // verif valeur des champs
    const validateItem = (value, name, label = "") => {

        let msg = "";
        let empty = {...fields};

        switch(name) {
            case "firstName":
            case "lastName":
                if ( !value || value.trim().length === 0 ){
                    msg =  `Le ${label} est obligatoire`;
                    empty[name] = true;
                } else {
                    if ( value && value.trim().length < 2 ){
                        msg =  `Le ${label} doit contenir 2 caractères minimum`;
                    } else {
                        msg = "";
                    }
                    empty[name] = false;
                }
                break;
            case "email":
                if ( !value || value.trim().length === 0 ){
                    msg =  "L'email est obligatoire";
                    empty[name] = true;
                } else {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    
                    if (!emailRegex.test(value)) {
                        msg = "L'email est invalide";
                    } else {
                        msg =  "";
                    }
                    empty[name] = false;
                }
                break;
            case "phone":
                if ( !value || value.trim().length === 0 ){
                    msg =  "Le numéro de téléphone obligatoire";
                    empty[name] = true;
                } else {
                    const phoneRegex = /^\+?[0-9 ]{7,20}$/;
                    
                    if (!phoneRegex.test(value)) {
                        msg = "Le numéro de téléphone est invalide";
                    } else {
                        msg =  "";
                    }
                    empty[name] = false;
                }
                break;
            case "company":
                if ( value && value.trim().length < 2 ){
                    msg =  "L'entreprise doit contenir 2 caractères minimum";
                } else {
                    msg = "";
                }
                break;
            case "subject":
                if ( !value || value.trim().length === 0 ){
                    msg =  "Le sujet est obligatoire";
                    empty[name] = true;
                } else {
                    if ( 
                        value != "Demande d'information" 
                        && value != "Demande de démo" 
                        && value != "Partenariat" 
                        && value != "Support technique" 
                        && value != "Autre" 
                    ) {
                        msg =  "Veuillez choisir le sujet parmi la liste proposée";
                    } else {
                        msg =  "";
                    }
                    empty[name] = false;
                }
                break;
            case "message" :
                if ( !value || value.trim().length === 0 ){
                    msg =  "Le message est obligatoire";
                    empty[name] = true;
                } else {
                    if ( value.trim().length < 10 ){
                        msg =  "Le message doit contenir 10 caractères minimum";
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
            console.log("data: ", response);
    
            // afficher msg confirmation
            console.log("afficher confirmation");
            setIsSubmit(true);
        } catch (error) {

            if (error.errors) {
                // stocker les erreurs
                setDatas(prev => ({ ...prev, ...error.errors })); 
                console.log("data.errors : ", error.errors);
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
                            Nous contacter
                        </h1>
                        <p className='subtitle'>
                            Votre demande a bien été prise en compte.<br/>
                            Nous vous recontacterons dans les plus brefs délais.
                        </p>
                        <h3>En attendant</h3>
                        <p className='subtitle'>
                            Nous vous invitons à parcourir notre site pour découvrir nos produits.
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

            {/* Hero */}
            <section className="hero">
                <HeroBg />
                <div className="container hero__container">
                    <div className="hero__title">
                        <h1 className='main-title'>
                            Nous contacter
                        </h1>
                        <p className='subtitle'>
                        Vous avez une question ou souhaitez en savoir plus sur nos solutions&nbsp;?<br/>
                        Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
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
                            required
                            onChange={e => validateItem(e.target.value, e.target.name, "prénom")}/>
                        <span className="form__item--error">{datas.firstName}</span>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="lastName">Nom*</label>
                        <input 
                            type="text" 
                            id="lastName"
                            name="lastName"
                            placeholder="Votre nom*" 
                            required
                            onChange={e => validateItem(e.target.value, e.target.name, "nom")}/>
                        <span className="form__item--error">{datas.lastName}</span>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="email">Email*</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder="Votre email*" 
                            required
                            onChange={e => validateItem(e.target.value, e.target.name)}/>
                        <span className="form__item--error">{datas.email}</span>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="phone">Téléphone*</label>
                        <input 
                            type="tel" 
                            id="phone"
                            name="phone"
                            pattern="^\+?[0-9 ]{7,20}$"
                            placeholder="Votre numéro de téléphone*" 
                            required
                            onChange={e => validateItem(e.target.value, e.target.name)}/>
                        <span className="form__item--error">{datas.phone}</span>
                    </p>
                    <p className='form__item'>
                        <label htmlFor="company">Entreprise</label>
                        <input 
                            type="text" 
                            id="company" 
                            name="company"
                            placeholder="Entreprise"
                            onChange={e => validateItem(e.target.value, e.target.name)}/>
                        <span className="form__item--error">{datas.company}</span>
                    </p>
                    <p className='form__item'>
                        <label htmlFor="subject">Sujet*</label>
                        <select
                            id="subject" 
                            name="subject"
                            defaultValue=""
                            required
                            onChange={e => validateItem(e.target.value, e.target.name)}>
                            <option value="" disabled hidden>-- Sélectionnez un sujet --</option>
                            <option value="Demande d'information">Demande d'information</option>
                            <option value="Demande de démo">Demande de démo</option>
                            <option value="Partenariat">Partenariat</option>
                            <option value="Support technique">Support technique</option>
                            <option value="Autre">Autre</option>
                        </select>
                        <span className="form__item--error">{datas.subject}</span>
                    </p>
                    <p className='form__item'>
                        <label htmlFor="message">Message*</label>
                        <textarea 
                            type="text" 
                            id="message"
                            name="message"
                            placeholder="Votre message*" 
                            rows="10"
                            onChange={e => validateItem(e.target.value, e.target.name)}></textarea>
                        <span className="form__item--error">{datas.message}</span>
                    </p>
                    <button 
                        type="submit" 
                        className={`ui__btn form__submit ${isActive ? 'isActive' : ""}`}
                    >Envoyer le message</button>
                </form>
            </section>
        </main>
    );
};

export default Contact;