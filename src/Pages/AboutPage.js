import React from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';

/* pages */
import Page from '../Pages/Page';

import '../Styles/about-page.css';

/*
	page for about page
*/
export default class AboutPage extends Page {
	static defaultProps = {
		wrapperCls: '',
		page: CONSTANTS.PAGE.ABOUT,
		pageName: 'about',
	};

	renderPageInner() {
		const { wrapperCls } = this.props;

		const imgPath = require('../images/gallery-photo.jpg');

		return (
			<div className={ cx('et-about-page', 'et-page', wrapperCls) }>
				<img className="et-about__image" src={ imgPath } alt="Daniel at an art gallery in Miami."/>

				<div className="et-about__container">
					<p className="et-about__description">
						Daniel Xiao graduated from Georgia Institute of Technology in 2014. He received a Bachelors of Science in Computational Media, which is a major much like Computer Science in that it teaches how to program and utilize technology but it also focuses on digital media and how computers have potential to be an expressive and interactive medium.
					</p>

					<p className="et-about__description">
						So now he spending his days building games and applications.
					</p>

					<p className="et-about__description">
						He is also looking for employment and would love to talk to you! You can reach him at <a href="mailto:dxiao.ns@gmail.com">dxiao.ns@gmail.com</a>.
					</p>

					<p className="et-about__description">
						He also volunteers at an animal shelter and has three pet rats. He loves video games and board games.
					</p>
				</div>

				<span className="et-about__container-bg" />

			</div>
		);
	}
}