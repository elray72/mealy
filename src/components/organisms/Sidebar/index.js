import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_sidebar.scss';

const Sidebar = (props) => {
	const componentClass = classNames(props.className, 'sidebar');

	return (
		<aside className={componentClass}>
			<nav className="sidebar__nav">
				<ul className="sidebar__links">
				</ul>
			</nav>
		</aside>
	);
};

Sidebar.propTypes = {
	className: PropTypes.string,
};

export default Sidebar;
