import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_hamburger.scss';

const Hamburger = (props) => {
	const componentClass = classNames(props.className, 'hamburger');
	return (
		<button className={componentClass}>
		</button>
	);
};

Hamburger.propTypes = {
	className: PropTypes.string,
};

export default Hamburger;
