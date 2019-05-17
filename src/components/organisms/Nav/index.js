import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './_nav.scss';

const Nav = (props) => {
	const componentClass = classNames(props.className, 'nav');

	return (
		<nav className={componentClass}>
			{props.children}
			<ul className="nav__list">
				<li className="nav__item">
					<Link to="/" className="nav__link">Dashboard</Link>
				</li>
			</ul>
		</nav>
	);
};

Nav.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default Nav;
