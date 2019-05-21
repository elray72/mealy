import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_shopping-list.scss';

const ShoppingList = (props) => {
	const componentClass = classNames(props.className, 'shopping');

	return (
		<div className={componentClass}>
			<h2>Shopping List</h2>
			<p>{props.page}, {props.section}</p>
		</div>
	);
};

ShoppingList.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	page: PropTypes.string,
	section: PropTypes.string,
};

export default ShoppingList;
