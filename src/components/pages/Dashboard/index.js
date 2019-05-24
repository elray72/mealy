/** ====================================================================================================================
 // Page: Dashboard
 // ================================================================================================================= */
import React from 'react';
import { Helmet } from 'react-helmet';
import './_dashboard.scss';

// Components
import RecipePicker from '../../views/RecipePicker';
import PlanPicker from '../../views/PlanPicker';
import ShoppingList from '../../views/ShoppingList';
import ViewButton from '../../atoms/ViewButton';

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
						<ViewButton text="Recipes" target="Dashboard.Left.RecipePicker" />
						<ViewButton text="My plan" target="Dashboard.Left.PlanPicker" />
						<RecipePicker placeholder="Dashboard.Left.RecipePicker" />
						<PlanPicker placeholder="Dashboard.Left.PlanPicker" />
					</section>
					<section className="dashboard__right">
						<ViewButton text="My plan" target="Dashboard.Right.PlanPicker" />
						<ViewButton text="Shopping List" target="Dashboard.Right.ShoppingList" />
						<PlanPicker placeholder="Dashboard.Right.PlanPicker" />
						<ShoppingList placeholder="Dashboard.Right.ShoppingList" />
					</section>
				</div>
			</div>
		);
	}
}
