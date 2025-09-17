import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from './stores/auth.store';
import AppRoutes from './AppRoutes';
import Starter from './pages/Starter/Starter';

function App() {
	const hasLogedInBefore = localStorage.getItem('new-user');
	const { setToken, setUser } = useAuth();

	// Initialize auth state from localStorage on app start
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
				console.error('Failed to parse user data from localStorage:', error);
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
