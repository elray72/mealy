import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { isViewVisible } from '../../../store/reducers/views';
import './_recipe-picker.scss';

const RecipePicker = (props) => {
	if (!props.isVisible) return '';
	const componentClass = classNames(props.className, 'recipes');

	return (
		<div className={componentClass}>
			<h2>Recipe picker</h2>
			<p>{props.page}, {props.section}</p>
		</div>
	);
};

RecipePicker.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	page: PropTypes.string,
	section: PropTypes.string,
	name: PropTypes.string,
};

const mapStateToProps = (state, props) => {
	props.name = 'RecipePicker';
	return {
		recipes: [],
		isVisible: isViewVisible(state, props),
	};
};

export default connect(mapStateToProps)(RecipePicker);
