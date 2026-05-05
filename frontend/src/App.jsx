import { BrowserRouter, Routes, Route } from 'react-router';

import Cgu from './pages/ConditionsGenerales';
import Confidentialite from './pages/Confidentialite';
import Cookies from './pages/Cookies';
import DemandeDemo from './pages/DemandeDemo';
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

import './assets/styles/general.css';

function App() {

    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                {/* Home */}
                <Route path="/" element={<Home/>}></Route>

                {/* Produits */}
                <Route path="/produits/omnia" element={<Omnia/>}></Route>
                <Route path="/produits/transformation-digitale/presentation" element={<Transformation/>}></Route>
                <Route path="/produits/transformation-digitale/geode" element={<Geode/>}></Route>
                <Route path="/produits/transformation-digitale/omniscan" element={<Omniscan/>}></Route>
                <Route path="/produits/use-cases" element={<UseCases/>}></Route>

                {/* Autres */}
                <Route path="/conditions-generales-d-utilisation" element={<Cgu/>}></Route>
                <Route path="/confidentilite" element={<Confidentialite/>}></Route>
                <Route path="/cookies" element={<Cookies/>}></Route>
                <Route path="/contact" element={<DemandeDemo/>}></Route>
                <Route path="/faq" element={<Faq/>}></Route>
                <Route path="/juridictions" element={<Juridictions/>}></Route>
                <Route path="/mentions-legales" element={<MentionsLegales/>}></Route>
                
                {/* Blog */}
                <Route path="/blog/articles" element={<Articles/>}></Route>
                <Route path="/blog/ressources" element={<Ressources/>}></Route>
                <Route path="/blog/webinaires" element={<Webinaires/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
