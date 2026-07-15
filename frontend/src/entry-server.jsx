import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';

import AppRoutes from './AppRoutes';

import './assets/styles/general.css';

export function render(url) {
    const helmetContext = {};

    const html = renderToString(
        <HelmetProvider context={helmetContext}>
            <StaticRouter location={url}>
                <AppRoutes />
            </StaticRouter>
        </HelmetProvider>
    );

    return { html, helmet: helmetContext.helmet };
}
