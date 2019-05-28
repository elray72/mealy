import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { isViewVisible } from '../../../store/reducers/views';
import './_plan-picker.scss';

const PlanPicker = (props) => {
	if (!props.isVisible) return null; //console.log('PlanPicker', props);
	const componentClass = classNames(props.className, 'plans');

	return (
		<div className={componentClass}>
			<h2>Plan Picker</h2>
			<p>{props.placeholder}</p>
		</div>
	);
};

PlanPicker.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	placeholder: PropTypes.string,
};

const mapStateToProps = (state, props) => {
	return {
		...props,
		plans: {},
		isVisible: isViewVisible(state, props),
	};
};

export default connect(mapStateToProps)(PlanPicker);
