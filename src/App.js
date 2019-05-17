import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'sanitize.css';
import './themes/v1/scss/style.scss';

import Header from './components/organisms/Header';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<React.Fragment className="App">
			<Header/>
			<main>
				<Switch>
					<Route exact path="/" component={Dashboard} />
				</Switch>
			</main>
		</React.Fragment>
	);
}

export default App;
