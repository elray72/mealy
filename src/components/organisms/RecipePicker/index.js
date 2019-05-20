import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './_recipe-picker.scss';

const RecipePicker = (props) => {
	const componentClass = classNames(props.className, 'recipes');

	return (
		<div className={componentClass}>
			<h1>Recipe picker</h1>
			<ul className="recipes__list">
				<li className="recipes__item">
					<Link to="/" className="nav__link">Dashboard</Link>
				</li>
			</ul>
		</div>
	);
};

RecipePicker.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default RecipePicker;
