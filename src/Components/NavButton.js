import React from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';
import { Link } from 'react-router-dom';

/* styles */
import '../Styles/nav-button.css';
import '../Styles/nav-button-splash.css';

/* kinda generic button actually */
export default class NavButton extends React.Component {
	static defaultProps = {
    	wrapperCls: '',
		txt: '',
		active: false,
		page: '',
		isSplashPage: false,
		fadeIn: false,
		linkPath: CONSTANTS.ROUTES.SPLASH,
		onNavClick: () => Promise.resolve(),
    };

	render(){
		const { wrapperCls, txt, active, isSplashPage, page, linkPath, fadeIn } = this.props;

		const modifiers = {
			'active': active,
			'mod-splash': isSplashPage,
			'mod-fade-in animation-grow-from-bg': fadeIn,

			'effects--projects': page === CONSTANTS.PAGE.PROJECTS,
			'effects--games': page === CONSTANTS.PAGE.GAMES,
			'effects--about': page === CONSTANTS.PAGE.ABOUT,
		};

		const colorMods = {
			'projects-color': page === CONSTANTS.PAGE.PROJECTS,
			'games-color': page === CONSTANTS.PAGE.GAMES,
			'about-color': page === CONSTANTS.PAGE.ABOUT,
		}

		return (
			<Link
				className={cx('et-nav-button', modifiers, wrapperCls)}
				key={`${txt}-key`}
				onClick={ this.handleNavClick }
				to={ linkPath }
			>
				<div className="et-nav-button__content">
					{ txt }
				</div>

				<div className="et-nav-button__effects"></div>
			</Link>
		);
	}

	handleNavClick = () => {
		const { onNavClick, page } = this.props;
		onNavClick(page);
	}
}