import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { toggleView } from '../../../store/actions/views';
import './_button.scss';

const ViewButton = (props) => {
	const componentClass = classNames(props.className, 'button');

	const handleButtonClick = () => {
		props.dispatch(toggleView(props.target));
	};

	return (
		<button type="button"
			className={componentClass}
			onClick={handleButtonClick}>
			{props.text}
		</button>
	)
};

ViewButton.propTypes = {
	className: PropTypes.string,
	dispatch: PropTypes.func,
	target: PropTypes.string,
	text: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	};
};

export default connect(mapDispatchToProps)(ViewButton);
