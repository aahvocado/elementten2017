import React, { Component } from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';

/* styles */
import '../Styles/color-stripe.css';

/* just a container for the color stripe */
export default class ColorStripe extends Component {
	static defaultProps = {
		wrapperCls: '',
		previousPage: '',
    	page: '',
    	disabled: false,
    	primary: false,
    };

	render(){
		const { wrapperCls, previousPage, page, disabled, primary } = this.props;

		const modifiers = {
			'disabled': disabled,
			'mod-primary': primary,

			'generic-bg': page === 'generic',

			'projects-bg': page === CONSTANTS.PAGE.PROJECTS,
			'games-bg': page === CONSTANTS.PAGE.GAMES,
			'about-bg': page === CONSTANTS.PAGE.ABOUT,

			'previous-projects-bg': previousPage === CONSTANTS.PAGE.PROJECTS,
			'previous-games-bg': previousPage === CONSTANTS.PAGE.GAMES,
			'previous-about-bg': previousPage === CONSTANTS.PAGE.ABOUT,
		};

		return (
			<div className={ cx('et-color-stripe', modifiers, wrapperCls) }>
			</div>
		);
	}
}