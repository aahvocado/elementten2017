import React, { Component } from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';

/* styles */
import '../Styles/color-stripe.css';

/* just a container for the color stripe */
export default class ColorStripe extends Component {
	static defaultProps = {
		wrapperCls: '',
    	page: '',
    	disabled: false,
    };

	render(){
		const { wrapperCls, page, disabled } = this.props;

		const modifiers = {
			'disabled': disabled,
			'projects-bg': page === CONSTANTS.PAGE.PROJECTS,
			'games-bg': page === CONSTANTS.PAGE.GAMES,
			'about-bg': page === CONSTANTS.PAGE.ABOUT,
		}

		return (
			<div className={ cx('et-color-stripe', modifiers, wrapperCls) }>
			</div>
		);
	}
}