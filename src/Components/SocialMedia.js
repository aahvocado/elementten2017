import React, { Component } from 'react';
import cn from 'classnames';

/* pages */
import '../Styles/social-media.css';

/*
	page for about page
*/
export default class AboutPage extends Component {
	static defaultProps = {
		wrapperCls: '',
	};

	render() {
		return (
			<div className="et-social-media">
				<a 
					className={ cn('fa fa-github', 'et-social-media__item') }
					target="_blank"
					href="https://github.com/neonwednesdays"
				>
				</a>

				<a 
					className={ cn('fa fa-instagram', 'et-social-media__item') }
					target="_blank"
					href="https://www.instagram.com/aahvocado/"
				>
				</a>

				<a 
					className={ cn('fa fa-linkedin', 'et-social-media__item') }
					target="_blank"
					href="https://www.linkedin.com/in/daniel-xiao-b4928a27/"
				>
				</a>
			</div>
		);
	}

}