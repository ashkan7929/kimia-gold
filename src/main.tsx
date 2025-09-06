import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import './i18n';
import './fonts.css';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

const isLocalhost = ['localhost', '127.0.0.1'].includes(location.hostname);

if ('serviceWorker' in navigator && (import.meta.env.PROD || isLocalhost)) {

// if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then(reg => console.log('✅ Service Worker registered:', reg.scope))
            .catch(err => console.error('❌ Service Worker failed:', err));
    });
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
