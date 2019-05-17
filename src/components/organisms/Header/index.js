import React from 'react';
import classNames from 'classnames';
import './_header.scss';

// Components
import Hamburger from '../../atoms/Hamburger';
//import Logo from '../../atoms/Logo';
import Nav from '../Nav';

export default class Header extends React.Component {
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
	};

	handleOverlayClick = () => {
		this.toggleExpandedState();
	};

	render() {
		const headerClass = classNames({
			'header': true,
			'header--expanded': this.state.expanded,
		});

		return (
			<header className={`${headerClass} header--sticky`}>
				<div className="header__inner">
					<Nav>
						<Hamburger onClick={this.handleHamburgerClick} />
						{/*<Logo text="Mealy" />*/}
					</Nav>
				</div>
				<div className="header__overlay" onClick={this.handleOverlayClick} />
			</header>
		);
	}
}
