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

		// const imgPath = require('../../public/images/galleryPhoto.jpg');

		return (
			<div className={ cx('et-about-page', 'et-page', wrapperCls) }>

				<div className="et-about__content-container">
					<p className="et-about__description">
						Daniel Xiao graduated from Georgia Institute of Technology in 2014. He received a Bachelors of Science in Computational Media, which is a major much like Computer Science but it also teaches how to utilize technology and programming to create expressive media. 
					</p>

					<p className="et-about__description">
						He would be happy to be contacted at <a href="mailto:dxiao.ns@gmail.com">dxiao.ns@gmail.com</a>.
					</p>

				</div>

				<div className="et-about__image-container">
					<span className="bg-blur">
						<span className="bg-unblur"></span>
					</span>
					<img className="et-about__image" alt="Daniel at an art gallery in Miami."/>
				</div>

			</div>
		);
	}
}