import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from './stores/auth.store';
import AppRoutes from './AppRoutes';
import Starter from './pages/Starter/Starter';

function App() {
    const hasLogedInBefore = localStorage.getItem('new-user');
    const { setToken, setUser } = useAuth();
    useEffect(() => {
        const isFirstVisit = localStorage.getItem('first-visit');
        if (!isFirstVisit) {
            if ('caches' in window) {
                caches.keys().then(names => {
                    names.forEach(name => {
                        caches.delete(name);
                    });
                });
            }

            localStorage.setItem('first-visit', 'true');
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        const userData = localStorage.getItem('user_data');

        if (token) {
            setToken(token);
        }

        if (userData) {
            try {
                const user = JSON.parse(userData);
                setUser(user);
            } catch (error) {
                console.error(error);
                localStorage.removeItem('user_data');
            }
        }
    }, [setToken, setUser]);

    return (
        <Router>
            {!hasLogedInBefore && <Starter />}
            <div className="App">
                <AppRoutes />
            </div>
        </Router>
    );
}

export default App;
