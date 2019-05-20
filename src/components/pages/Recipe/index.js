/** ====================================================================================================================
 // Page: Dashboard
 // ================================================================================================================= */
import React from 'react';
import { Helmet } from 'react-helmet';

export default class Recipe extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<div className="recipe">
				<Helmet>
					<title>Mealy - Menudo recipe</title>
					<meta name="description" content="Recipe for Menudo." />
				</Helmet>
				<h1>Menudo</h1>
			</div>
		);
	}
}
