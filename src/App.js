import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'sanitize.css';
import './themes/v1/scss/style.scss';

// Components
import Header from './components/organisms/Header';
import Sidebar from "./components/organisms/Sidebar";

// Pages
import Dashboard from './components/pages/Dashboard';
import Recipe from './components/pages/Recipe';

function App() {
	return (
		<React.Fragment>
			<Header />
			<main className="main">
				<Sidebar />
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/recipe" component={Recipe} />
				</Switch>
			</main>
		</React.Fragment>
	);
}

export default App;
