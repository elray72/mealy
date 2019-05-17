/** ====================================================================================================================
 // View: Test
 // ================================================================================================================= */
import React from 'react';
import { Helmet } from 'react-helmet';

export default class Dashboard extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<div>
				<Helmet>
					<title>Mealy - Dashboard</title>
					<meta name="description" content="Meal prep assistant for busy people." />
				</Helmet>
				<h1>Test</h1>
			</div>
		);
	}
}
