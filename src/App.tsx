// import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Starter from './pages/Starter/Starter';

function App() {
	const hasLogedInBefore = localStorage.getItem('new-user')

	return (
		// <Provider store={null}>
			<Router>
				{!hasLogedInBefore && <Starter />}
				<div className="App">
					<AppRoutes />
				</div>
			</Router>
		// </Provider>
	);
}

export default App;
