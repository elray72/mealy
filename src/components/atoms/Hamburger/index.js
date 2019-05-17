import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_hamburger.scss';

export default class Header extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		onClick: PropTypes.func,
	};

	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
		};
	}

	toggleExpandedState = () => {
		const prevState = this.state.expanded;
		this.setState({ expanded: !prevState });
	};

	handleHamburgerClick = () => {
		this.toggleExpandedState();
		if (typeof this.props.onClick === 'function') {
			this.props.onClick();
		}
	};

	render() {
		const componentClass = classNames(this.props.className, {
			'hamburger': true,
			'hamburger--expanded': this.state.expanded,
		});

		return (
			<button type="button" className={componentClass} onClick={this.handleHamburgerClick}>
				<span className="hamburger__icon" />
				<span className="hamburger__label">Menu</span>
			</button>
		);
	}
}
