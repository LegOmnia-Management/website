import { Routes, Route } from 'react-router';

import ScrollToTop from './components/ScrollToTop';

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

import Articles from './pages/blog/Articles';
import Ressources from './pages/blog/Ressources';
import Webinaires from './pages/blog/Webinaires';

import Header from './components/Header';
import Footer from './components/Footer';

function AppRoutes() {
    return (
        <>
            <ScrollToTop />
            <Header />

            <Routes>
                {/* Home */}
                <Route path="/" element={<Home />} />

                {/* Produits */}
                <Route path="/produits/omnia" element={<Omnia />} />
                <Route path="/produits/transformation-digitale/presentation" element={<Transformation />} />
                <Route path="/produits/transformation-digitale/geode" element={<Geode />} />
                <Route path="/produits/transformation-digitale/omniscan" element={<Omniscan />} />
                <Route path="/produits/use-cases" element={<UseCases />} />

                {/* Autres */}
                <Route path="/cgu" element={<Cgu />} />
                <Route path="/confidentialite" element={<Confidentialite />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/juridictions" element={<Juridictions />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />

                {/* Blog */}
                <Route path="/blog/articles" element={<Articles />} />
                <Route path="/blog/ressources" element={<Ressources />} />
                <Route path="/blog/webinaires" element={<Webinaires />} />
            </Routes>

            <Footer />
        </>
    );
}

export default AppRoutes;
