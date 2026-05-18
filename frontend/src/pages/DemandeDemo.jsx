import HeroBg from '../components/HeroBg';

import '../assets/styles/contact.css';

const DemandeDemo = () => {
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
                    <p className='form__item--half'>
                        <label htmlFor="firstName">Prénom*</label>
                        <input type="text" id="firstName" placeholder="Votre prénom*"/>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="lastName">Nom*</label>
                        <input type="text" id="lastName" placeholder="Votre nom*"/>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="email">Email*</label>
                        <input type="text" id="email" placeholder="Votre email*"/>
                    </p>
                    <p className='form__item--half'>
                        <label htmlFor="phone">Téléphone*</label>
                        <input type="text" id="phone" placeholder="Votre numéro de téléphone*"/>
                    </p>
                    <p className='form__item'>
                        <label htmlFor="company">Entreprise</label>
                        <input type="text" id="company" placeholder="Entreprise"/>
                    </p>
                    <p className='form__item'>
                        <label htmlFor="subject">Sujet*</label>
                        <select id="subject" defaultValue="">
                            <option value="">-- Sélectionnez un sujet --</option>
                            <option value="Demande d'information">Demande d'information</option>
                            <option value="Demande de démo">Demande de démo</option>
                            <option value="Partenariat">Partenariat</option>
                            <option value="Support technique">Support technique</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </p>
                    <p className='form__item'>
                        <label htmlFor="message">Message*</label>
                        <textarea type="text" id="message" placeholder="Votre message*" rows="10"></textarea>
                    </p>
                    <button type="submit" className='ui__btn form__submit'>Envoyer le message</button>
                </form>
            </section>
        </main>
    );
};

export default DemandeDemo;