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
		modSquare: false,
		linkPath: CONSTANTS.ROUTES.SPLASH,
		onNavClick: () => Promise.resolve(),
    };

	render(){
		const { wrapperCls, txt, active, modSquare, page, linkPath } = this.props;

		const modifiers = {
			'active': active,
			'mod-square-button': modSquare,

			'projects-border-color': page === CONSTANTS.PAGE.PROJECTS,
			'games-border-color': page === CONSTANTS.PAGE.GAMES,
			'about-border-color': page === CONSTANTS.PAGE.ABOUT,
		};

		return (
			<Link	
				className={cx('nav-button-component', modifiers, wrapperCls)}
				key={`${txt}-key`}
				onClick={ this.handleNavClick }
				to={ linkPath }
			>
				{txt}
			</Link>
		);
	}

	handleNavClick = () => {
		const { onNavClick, page } = this.props;
		onNavClick(page);
	}
}