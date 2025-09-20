import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from './stores/auth.store';
import AppRoutes from './AppRoutes';
import Starter from './pages/Starter/Starter';

function App() {
    // const hasLogedInBefore = localStorage.getItem('new-user');
    const { setToken, setUser } = useAuth();
    const [newUser, setNewUser] = useState<boolean | null>(null);
    // useEffect(() => {
    //     const isFirstVisit = localStorage.getItem('first-visit');
    //     if (!isFirstVisit) {
    //         if ('caches' in window) {
    //             caches.keys().then(names => {
    //                 names.forEach(name => {
    //                     caches.delete(name);
    //                 });
    //             });
    //         }

    //         localStorage.setItem('first-visit', 'true');
    //     }
    // }, []);

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
        const hasLogedInBefore = localStorage.getItem('new-user');
        if (hasLogedInBefore === 'done') {
            setNewUser(false);
        } else {
            setNewUser(true);
        }
    }, [setToken, setUser]);

    const onFinish = () => {
        localStorage.setItem('new-user', 'done');
        setNewUser(false);
    };

    if (newUser === null) return null;
    return (
        <Router>
            {!newUser && <Starter onFinish={onFinish} />}
            <div className="App">
                <AppRoutes />
            </div>
        </Router>
    );
}

export default App;
