import React, { Component } from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';

/* styles */
import '../Styles/page.css';

/*
	Page
*/
export default class Page extends Component {
	static defaultProps = {
		page: CONSTANTS.PAGE.SPLASH,
		pageName: 'default',
		onPageChange: () => Promise.resolve(),
	};

	render(){
		const { page, pageName } = this.props;

		const titleModifier = {
			'projects-color': page === CONSTANTS.PAGE.PROJECTS,
			'games-color': page === CONSTANTS.PAGE.GAMES, 
			'about-color': page === CONSTANTS.PAGE.ABOUT, 
		};

		return (
			<div className={cx('et-page__inner')}>
				<h2 className={ cx('et-page__title', titleModifier)}>{ pageName }</h2>

				{ this.renderPageInner() }
			</div>
		);
	}

	renderPageInner() {
		//extend this
		return (
			<div>extend this function</div>
		);
	}

	handlePageChange = (nextPage) => {
		const { onPageChange } = this.props;
		onPageChange(nextPage);
	}
}