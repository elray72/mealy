/** ====================================================================================================================
 // Page: Dashboard
 // ================================================================================================================= */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Pages, Sections, Views } from '../../../store/constants';
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
						<ViewButton page={Pages.DASHBOARD} section={Sections.LEFT} view={Views.RECIPE_PICKER} text="Recipes" />
						<ViewButton page={Pages.DASHBOARD} section={Sections.LEFT} view={Views.PLAN_PICKER} text="My plan" />
						<RecipePicker page={Pages.DASHBOARD} section={Sections.LEFT} />
						<PlanPicker page={Pages.DASHBOARD} section={Sections.LEFT} />
					</section>
					<section className="dashboard__right">
						<ShoppingList page={Pages.DASHBOARD} section={Sections.RIGHT} />
					</section>
				</div>
			</div>
		);
	}
}
