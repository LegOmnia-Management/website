import { useState, useEffect } from 'react';

import HeroBg from '../components/HeroBg';

import '../assets/styles/contact.css';

const Contact = () => {

    const [ datas, setDatas ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
    });
    const [ fields, setFields ] = useState({
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        subject: true,
        message: true
    });
    const [ isActive, setIsActive ] = useState(false);

    const validateItem = (value, name) => {

        let msg = "";
        let empty = {...fields};

        switch(name) {
            case "firstName":
            case "lastName":
                if ( !value || value.trim().length === 0 ){
                    msg =  "Ce champ est obligatoire";
                    empty[name] = true;
                } else {
                    if ( value && value.trim().length < 2 ){
                        msg =  "Ce champ doit contenir au moins 2 caractères";
                    } else {
                        msg = "";
                    }
                    empty[name] = false;
                }
                break;
            case "email":
                if ( !value || value.trim().length === 0 ){
                    msg =  "Ce champ est obligatoire";
                    empty[name] = true;
                } else {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    
                    if (!emailRegex.test(value)) {
                        msg = "Email invalide";
                    } else {
                        msg =  "";
                    }
                    empty[name] = false;
                }
                break;
            case "phone":
                if ( !value || value.trim().length === 0 ){
                    msg =  "Ce champ est obligatoire";
                    empty[name] = true;
                } else {
                    const phoneRegex = /^\+?[0-9 ]{7,20}$/;
                    
                    if (!phoneRegex.test(value)) {
                        msg = "Numéro de téléphone invalide";
                    } else {
                        msg =  "";
                    }
                    empty[name] = false;
                }
                break;
            case "company":
                if ( value && value.trim().length < 2 ){
                    msg =  "Ce champ doit contenir au moins 2 caractères";
                } else {
                    msg = "";
                }
                break;
            case "subject":
                if ( !value || value.trim().length === 0 ){
                    msg =  "Ce champ est obligatoire";
                    empty[name] = true;
                } else {
                    if ( 
                        value != "Demande d'information" 
                        && value != "Demande de démo" 
                        && value != "Partenariat" 
                        && value != "Support technique" 
                        && value != "Autre" 
                    ) {
                        msg =  "Veuillez choisir parmi les sujets proposés";
                    } else {
                        msg =  "";
                    }
                    empty[name] = false;
                }
                break;
            case "message" :
                if ( !value || value.trim().length === 0 ){
                    msg =  "Ce champ est obligatoire";
                    empty[name] = true;
                } else {
                    if ( value.trim().length < 20 ){
                        msg =  "Ce champ doit contenir au moins 20 caractères";
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

        setDatas(prev => ({
            ...prev,
            [name]: msg
        }));
        setFields(empty);
    }

    const hasErrors = () => {

        return Object.values(datas).some(error => error !== "");
    }

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
                <form action="" className='contact__form'>
                    <p className="asterisk">* Champs obligatoires</p>
                    <p className='form__item--half'>
                        <label htmlFor="firstName">Prénom*</label>
                        <input 
                            type="text" 
                            id="firstName"
                            name="firstName"
                            placeholder="Votre prénom*" 
                            required
                            onChange={e => validateItem(e.target.value, e.target.name)}/>
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
                            onChange={e => validateItem(e.target.value, e.target.name)}/>
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
                            pattern="0[1-9](?: [0-9]{2}){4}"
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