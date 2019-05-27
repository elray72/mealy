import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { isViewVisible } from '../../../store/reducers/views';
import { getRecipes } from '../../../store/reducers/recipes';
import './_recipe-picker.scss';

const RecipePicker = (props) => { console.log('RecipePicker', props);
	if (!props.isVisible) return null;
	const componentClass = classNames(props.className, 'recipes');
console.log(props);
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
	return {
		...props,
		recipes: getRecipes(),
		isVisible: isViewVisible(state, props),
	};
};

export default connect(mapStateToProps)(RecipePicker);
