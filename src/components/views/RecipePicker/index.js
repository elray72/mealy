import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { isViewVisible } from '../../../store/reducers/views';
import { fetchRecipes } from '../../../store/actions/recipes';
import './_recipe-picker.scss';

const RecipePicker = (props) => {
	if (!props.isVisible) return null; //console.log('PlanPicker', props);
	const componentClass = classNames(props.className, 'recipes');

	return (
		<div className={componentClass}>
			<h2>Recipes</h2>
			<p>{props.placeholder}</p>


			{/*<div>*/}
			{/*	<div className="" id="recipe_a">Recipe A</div>*/}
			{/*	<div className="" id="recipe_a">Recipe A</div>*/}
			{/*	<div className="" id="recipe_a">Recipe A</div>*/}
			{/*	<div className="" id="recipe_a">Recipe A</div>*/}
			{/*	<div className="" id="recipe_a">Recipe A</div>*/}
			{/*	<div className="" id="recipe_a">Recipe A</div>*/}
			{/*</div>*/}

		</div>
	);
};

RecipePicker.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	placeholder: PropTypes.string,
};

const mapStateToProps = (state, props) => {

	console.log(state);
	//const { recipes, placeholder }

	return {
		...props,
		recipes: fetchRecipes(state),
		isVisible: isViewVisible(state, props),
	};
};

export default connect(mapStateToProps)(RecipePicker);
