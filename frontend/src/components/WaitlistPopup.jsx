import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { joinWaitlistQuick } from '../api/waitlist';

import '../assets/styles/waitlistPopup.css';

import useLang from '../i18n/useLang';
import { ROUTES } from '../i18n/routes';
import { translateApiErrors } from '../i18n/apiErrors';

// petit délai pour laisser la page s'afficher avant la pop-up
const OPEN_DELAY = 400;

// inscrit : la pop-up ne réapparaît plus (localStorage)
const JOINED_KEY = 'legomnia-waitlist-joined';

// fermée : plus de pop-up jusqu'à la prochaine visite (sessionStorage)
const CLOSED_KEY = 'legomnia-waitlist-closed';

// pages où la pop-up ne s'ouvre pas (formulaire complet et pages légales)
const EXCLUDED = ['waitlist', 'cgu', 'confidentialite', 'cookies', 'mentionsLegales']
    .flatMap((key) => Object.values(ROUTES[key]));

const read = (storage, key) => {
    try {
        return storage.getItem(key);
    } catch {
        return null;
    }
};

const write = (storage, key) => {
    try {
        storage.setItem(key, '1');
    } catch {
        // stockage indisponible (navigation privée...) : on ignore
    }
};

const shouldOpen = () => {
    // prerender (Puppeteer) : jamais de pop-up dans le HTML statique
    if (navigator.webdriver) return false;

    return !read(localStorage, JOINED_KEY) && !read(sessionStorage, CLOSED_KEY);
};

const WaitlistPopup = () => {

    const { pathname } = useLocation();
    const { lang, lp, tr } = useLang();

    const dialogRef = useRef(null);
    const hasOpened = useRef(false);

    const [ isOpen, setIsOpen ] = useState(false);
    const [ error, setError ] = useState("");
    const [ isSending, setIsSending ] = useState(false);
    const [ isSubmit, setIsSubmit ] = useState(false);

    const isExcluded = EXCLUDED.includes(pathname.replace(/\/+$/, '') || '/');

    // ouverture dès l'arrivée sur le site (une fois par visite)
    useEffect(() => {
        if (hasOpened.current || isExcluded || !shouldOpen()) return;

        const timer = setTimeout(() => {
            hasOpened.current = true;
            setIsOpen(true);
        }, OPEN_DELAY);
        return () => clearTimeout(timer);
    }, [isExcluded]);

    // synchronise l'état React avec le <dialog> natif
    // (focus piégé, Échap et arrière-plan inerte gérés par le navigateur)
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (isOpen && !dialog.open) {
            dialog.showModal();
            dialog.querySelector('input[type="email"]')?.focus();
        }
        if (!isOpen && dialog.open) dialog.close();
    }, [isOpen]);

    const handleClose = () => {
        write(sessionStorage, CLOSED_KEY);
        setIsOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target).entries());

        setIsSending(true);
        setError("");

        try {
            await joinWaitlistQuick(data);
            write(localStorage, JOINED_KEY);
            setIsSubmit(true);
        } catch (err) {
            if (err?.errors) {
                setError(Object.values(translateApiErrors(err.errors, lang))[0]);
            } else {
                setError(tr("Une erreur est survenue. Merci de réessayer.", "Something went wrong. Please try again."));
            }
        } finally {
            setIsSending(false);
        }
    };

    if (!isOpen) return null;

    return (
        <dialog
            ref={dialogRef}
            className="waitlist-popup"
            aria-labelledby="waitlist-popup-title"
            onClose={handleClose}
        >
            <div className="waitlist-popup__card">
                <button
                    type="button"
                    className="waitlist-popup__close"
                    onClick={() => dialogRef.current.close()}
                    aria-label={tr("Fermer", "Close")}
                >
                    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>

                <span className="waitlist-popup__badge">{tr("Accès anticipé", "Early access")}</span>

                {isSubmit ? (
                    <>
                        <h2 id="waitlist-popup-title" className="waitlist-popup__title">
                            {tr("C'est noté !", "You're on the list!")}
                        </h2>
                        <p className="waitlist-popup__text">
                            {tr(
                                "Vous êtes inscrit(e) sur la liste d'attente. Nous vous écrirons dès que votre accès à LegOmnia sera prêt.",
                                "You've joined the waiting list. We'll email you as soon as your LegOmnia access is ready."
                            )}
                        </p>
                        <p className="waitlist-popup__text">
                            {tr(
                                "Envie d'être prioritaire ? Parlez-nous un peu de vous.",
                                "Want to move up the list? Tell us a bit about yourself."
                            )}
                        </p>
                        <Link
                            to={lp("/liste-attente")}
                            className="waitlist-popup__submit"
                            onClick={() => dialogRef.current.close()}
                        >{tr("Compléter mon profil", "Complete my profile")}</Link>
                    </>
                ) : (
                    <>
                        <h2 id="waitlist-popup-title" className="waitlist-popup__title">
                            {tr("Rejoignez la liste d'attente", "Join the waiting list")}
                        </h2>
                        <p className="waitlist-popup__text">
                            {tr(
                                "LegOmnia ouvre bientôt. Laissez votre e-mail et nous vous enverrons votre invitation dès que votre accès sera prêt.",
                                "LegOmnia opens soon. Leave your email and we'll send your invite the moment your access is ready."
                            )}
                        </p>

                        <form className="waitlist-popup__form" onSubmit={handleSubmit}>
                            <label htmlFor="waitlist-popup-email" className="waitlist-popup__label">
                                {tr("E-mail", "Email")}
                            </label>
                            <input
                                type="email"
                                id="waitlist-popup-email"
                                name="email"
                                className="waitlist-popup__input"
                                placeholder={tr("vous@exemple.com", "you@example.com")}
                                autoComplete="email"
                                aria-invalid={error ? "true" : undefined}
                                aria-describedby={error ? "waitlist-popup-error" : undefined}
                                required
                            />

                            {/* Honeypot anti-spam : champ invisible pour un humain, rempli par les bots */}
                            <div className="form__hp" aria-hidden="true">
                                <label htmlFor="waitlist-popup-website">{tr("Ne pas remplir ce champ", "Do not fill in this field")}</label>
                                <input
                                    type="text"
                                    id="waitlist-popup-website"
                                    name="website"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    defaultValue=""
                                />
                            </div>

                            {error && <p id="waitlist-popup-error" className="waitlist-popup__error" role="alert">{error}</p>}

                            <button type="submit" className="waitlist-popup__submit" disabled={isSending}>
                                {isSending
                                    ? tr("Inscription en cours...", "Joining...")
                                    : tr("Rejoindre la liste d'attente", "Join the waiting list")}
                            </button>
                        </form>

                        <p className="waitlist-popup__note">
                            {tr(
                                <>Nous utiliserons cet e-mail uniquement pour vous prévenir de l'ouverture des inscriptions. Consultez notre <Link to={lp("/confidentialite")} target="_blank">Politique de confidentialité</Link> et notre <Link to={lp("/cookies")} target="_blank">Politique cookies</Link>.</>,
                                <>We'll only use this email to let you know when registration opens. Read our <Link to={lp("/confidentialite")} target="_blank">Privacy Policy</Link> and <Link to={lp("/cookies")} target="_blank">Cookie Policy</Link>.</>
                            )}
                        </p>
                    </>
                )}
            </div>
        </dialog>
    );
};

export default WaitlistPopup;
