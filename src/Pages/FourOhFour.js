import React, { Component } from 'react';
import cn from 'classnames';

/* styles */
import '../Styles/four-oh-four.css';

/*
	Page
*/
export default class Page extends Component {
	render(){
		return (
			<div className={ cn('et-page__inner', 'et-404') } >
				<div className={ cn('et-404__title', 'animation--text-shadow-raise') }>
					404
				</div>
			</div>
		);
	}
}