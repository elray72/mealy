/** ====================================================================================================================
 // Page: Dashboard
 // ================================================================================================================= */
import React from 'react';
import { Helmet } from 'react-helmet';
import './_dashboard.scss';

export default class Dashboard extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<div className="dashboard">
				<Helmet>
					<title>Mealy - Dashboard</title>
					<meta name="description" content="Meal prep assistant for busy people." />
				</Helmet>
				<div className="dashboard__header">
					<h1 className="dashboard__heading">Dashboard</h1>
				</div>
				<div className="dashboard__body">
					<section className="dashboard__left">
					</section>
					<section className="dashboard__right">
					</section>
				</div>
			</div>
		);
	}
}
