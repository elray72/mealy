import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { isViewVisible } from '../../../store/reducers/views';

const BlankPanel = (props) => {
	if (!props.isVisible) return '';
	const componentClass = classNames(props.className, 'dummy');

	return (
		<div className={componentClass}>
			<h2>BlankPanel</h2>
			<p>{props.page}, {props.section}</p>
		</div>
	);
};

BlankPanel.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	page: PropTypes.string,
	section: PropTypes.string,
	name: PropTypes.string,
};

const mapStateToProps = (state, props) => {
	props.name = 'BlankPanel';
	return {
		recipes: [],
		isVisible: isViewVisible(state, props),
	};
};

export default connect(mapStateToProps)(BlankPanel);
