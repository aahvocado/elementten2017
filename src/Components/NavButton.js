import React from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';

/* styles */
import '../Styles/nav-button.css';

/* kinda generic button actually */
export default class NavButton extends React.Component {
	static defaultProps = {
    	wrapperCls: '',
		txt: '',
		active: false,
		onclick: () => Promise.resolve(),
		style: {},
		page: '',
		modSquare: false,
    };

	render(){
		const { wrapperCls, txt, active, style, modSquare, page } = this.props;

		const modifiers = {
			'active': active,
			'mod-square-button': modSquare,

			'projects-border-color': page === CONSTANTS.NAVIGATION.PROJECTS,
			'games-border-color': page === CONSTANTS.NAVIGATION.GAMES,
			'about-border-color': page === CONSTANTS.NAVIGATION.ABOUT,
		};

		return (
			<button	className={cx('nav-button-component', modifiers, wrapperCls)}
					style={style}
					key={`${txt}-key`}
					onClick={ this.handleOnClick }>
				{txt}
			</button>
		);
	}

	handleOnClick = (e) => {
		const { onClick, page } = this.props;
		onClick(page);
	}
}