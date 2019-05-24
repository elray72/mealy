import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { isViewVisible } from '../../../store/reducers/views';
import './_shopping-list.scss';

const ShoppingList = (props) => { console.log('ShoppingList', props);
	if (!props.isVisible) return '';
	const componentClass = classNames(props.className, 'shopping');

	return (
		<div className={componentClass}>
			<h2>Shopping List</h2>
			<p>{props.placeholder}</p>
		</div>
	);
};

ShoppingList.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	placeholder: PropTypes.string,
};

const mapStateToProps = (state, props) => {
	return {
		shoppingList: [],
		isVisible: isViewVisible(state, props),
	};
};

export default connect(mapStateToProps)(ShoppingList);
