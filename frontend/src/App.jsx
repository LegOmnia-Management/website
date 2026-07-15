import { BrowserRouter } from 'react-router';

import AppRoutes from './AppRoutes';

import './assets/styles/general.css';

function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
