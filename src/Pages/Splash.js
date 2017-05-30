import React, { Component } from 'react';
import cx from 'classnames';

/* components */
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';

import '../Styles/splash-page.css';

export default class Splash extends Component {
	static defaultProps = {
		onPageChange: () => Promise.resolve(),
	};

	render(){
		return (
			<div className={cx('et-splash-page')}>
				<Header />

				<Navigation
					onPageChange={ this.handlePageChange }
				/>
			</div>
		);
	}

	handlePageChange = (nextPage) => {
		const { onPageChange } = this.props;
		onPageChange(nextPage);
	}
}