import React from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';
import { Link } from 'react-router-dom';

/* styles */
import '../Styles/nav-button.css';

/* kinda generic button actually */
export default class NavButton extends React.Component {
	static defaultProps = {
    	wrapperCls: '',
		txt: '',
		active: false,
		page: '',
		boxy: false,
		fadeIn: false,
		linkPath: CONSTANTS.ROUTES.SPLASH,
		onNavClick: () => Promise.resolve(),
    };

	render(){
		const { wrapperCls, txt, active, boxy, page, linkPath, fadeIn } = this.props;

		const modifiers = {
			'active': active,
			'mod-boxy': boxy,
			'mod-fade-in animation-grow-from-bg': fadeIn,

			'projects-border-color': page === CONSTANTS.PAGE.PROJECTS,
			'games-border-color': page === CONSTANTS.PAGE.GAMES,
			'about-border-color': page === CONSTANTS.PAGE.ABOUT,

			'effects--projects': page === CONSTANTS.PAGE.PROJECTS,
			'effects--games': page === CONSTANTS.PAGE.GAMES,
			'effects--about': page === CONSTANTS.PAGE.ABOUT,
		};

		return (
			<Link
				className={cx('et-nav-button', modifiers, wrapperCls)}
				key={`${txt}-key`}
				onClick={ this.handleNavClick }
				to={ linkPath }
			>
				<span className="et-nav-button__content">
					{ txt }
				</span>
				<span className={ cx('et-effect-container') }></span>
			</Link>
		);
	}

	handleNavClick = () => {
		const { onNavClick, page } = this.props;
		onNavClick(page);
	}
}