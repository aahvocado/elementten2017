import React from 'react';
import { CONSTANTS } from '../constants';

/* pages */
import Page from '../Pages/Page';

/*
	page for about page
*/
export default class AboutPage extends Page {
	static defaultProps = {
		page: CONSTANTS.PAGE.ABOUT,
		pageName: 'about',
	};

	renderPageInner() {
		return (
			<p>Daniel Xiao is a cool cat</p>
		);
	}
}