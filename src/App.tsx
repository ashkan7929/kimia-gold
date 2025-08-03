import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<AppRoutes />
				</div>
			</Router>
		</Provider>
	);
}

export default App;
