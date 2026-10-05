import { BrowserRouter, Routes, Route } from 'react-router';

import ScrollToTop from './components/ScrollToTop';
import LangSync from './components/LangSync';

import Cgu from './pages/Cgu';
import Confidentialite from './pages/Confidentialite';
import Cookies from './pages/Cookies';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Geode from './pages/Geode';
import Juridictions from './pages/Juridictions';
import Home from './pages/Home';
import MentionsLegales from './pages/MentionsLegales';
import Omnia from './pages/Omnia';
import Omniscan from './pages/Omniscan';
import Transformation from './pages/Transformation';
import UseCases from './pages/UseCases';
import Waitlist from './pages/Waitlist';

import Articles from './pages/blog/Articles';
import Article from './pages/blog/ArticleDetail';
import Ressources from './pages/blog/Ressources';
import Webinaires from './pages/blog/Webinaires';

import Header from './components/Header';
import Footer from './components/Footer';

import { ROUTES, LANGS } from './i18n/routes';

import './assets/styles/general.css';

// Chaque page est déclarée une fois et servie dans les deux langues
// (chemins définis dans i18n/routes.js)
const PAGES = [
    // Home
    { route: ROUTES.home, element: <Home/> },

    // Produits
    { route: ROUTES.omnia, element: <Omnia/> },
    { route: ROUTES.transformation, element: <Transformation/> },
    { route: ROUTES.geode, element: <Geode/> },
    { route: ROUTES.omniscan, element: <Omniscan/> },
    { route: ROUTES.useCases, element: <UseCases/> },

    // Autres
    { route: ROUTES.cgu, element: <Cgu/> },
    { route: ROUTES.confidentialite, element: <Confidentialite/> },
    { route: ROUTES.cookies, element: <Cookies/> },
    { route: ROUTES.contact, element: <Contact/> },
    { route: ROUTES.faq, element: <Faq/> },
    { route: ROUTES.juridictions, element: <Juridictions/> },
    { route: ROUTES.waitlist, element: <Waitlist/> },
    { route: ROUTES.mentionsLegales, element: <MentionsLegales/> },

    // Blog
    { route: ROUTES.articles, element: <Articles/> },
    { route: { fr: `${ROUTES.articles.fr}/:slug`, en: `${ROUTES.articles.en}/:slug` }, element: <Article/> },
    { route: ROUTES.ressources, element: <Ressources/> },
    { route: ROUTES.webinaires, element: <Webinaires/> },
];

function App() {

    return (
        <BrowserRouter>
        <ScrollToTop />
        <LangSync />
            <Header/>

            <Routes>
                {PAGES.flatMap(({ route, element }) =>
                    LANGS.map((lang) => (
                        <Route key={route[lang]} path={route[lang]} element={element}></Route>
                    ))
                )}
            </Routes>

            <Footer/>
        </BrowserRouter>
    )
}

export default App
