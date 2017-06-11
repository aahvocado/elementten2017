import React, { Component } from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';

/* styles */
import '../Styles/hamburger-menu.css';

/*
	floating hamburger menu usually in mobile
*/
export default class HamburgerMenu extends Component {
	static defaultProps = {
		onClick: () => Promise.resolve(),
		page: '',
		active: false,
    };

    state = {
    	active: false,
    };

	render(){
		const { page, active } = this.props;
		// const { active } = this.state;

		const modifiers = {
			'mod-active': active,
			'projects-border-color projects-color': page === CONSTANTS.PAGE.PROJECTS,
			'games-border-color games-color': page === CONSTANTS.PAGE.GAMES,
			'about-border-color about-color': page === CONSTANTS.PAGE.ABOUT,
		};

		return (
			<button 
				className={ cx('et-floating-hamburger', modifiers) } 
				onClick={ this.handleMenuToggle }
			>
				{ !active &&
					<span>☰</span>
				}
				{ active &&
					<span>x</span>
				}
			</button>
		);
	}

	handleMenuToggle = () => {
		const { onClick } = this.props;
		// this.setState({ active: !this.state.active });
		onClick();
	}
}