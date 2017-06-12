import React from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';

/* pages */
import Page from '../Pages/Page';
import SocialMedia from '../Components/SocialMedia';

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
			<div className={ cx('et-about-page', 'et-page__content-container', wrapperCls) }>

				<div className="et-about__image-container">
					<span className="bg-blur">
						<span className="bg-unblur"></span>
					</span>
					<div className="et-about__image" alt="Daniel at an art gallery in Miami." />
				</div>

				<div className="et-about__content-container">
					<p className="et-about__description">
						Daniel Xiao graduated from Georgia Institute of Technology in 2014. He received a Bachelors of Science in Computational Media, which is a major much like Computer Science but it also teaches how to utilize technology and programming to create expressive media. 
					</p>

					<p className="et-about__description">
						His focus is on the exciting and growing industry of the web. More specifically, he is excited about the future of front end development. He is currently working at Promethean Inc using technologies such as React and Webpack.
					</p>

					<p className="et-about__description">
						He would be happy to be contacted at <a className="href-link" href="mailto:dxiao.ns@gmail.com">dxiao.ns@gmail.com</a>.
					</p>

					<p className="et-about__description">
						Check out his <a className="href-link" href="./documents/DanielXiao_Resume_Final.pdf">resume</a>.
					</p>

					<SocialMedia />
				</div>				

			</div>
		);
	}
}