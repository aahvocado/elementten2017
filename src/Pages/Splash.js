import React, { Component } from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';

/* components */
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';

import '../Styles/splash-page.css';

export default class Splash extends Component {
	static defaultProps = {
		page: CONSTANTS.PAGE.SPLASH,
		onPageChange: () => Promise.resolve(),
		onPageLoad: () => Promise.resolve(),
	};

	render(){
		return (
			<div className={cx('et-splash-page')}>
				<Header />

				<Navigation
					isSplashPage
					fadeIn
					onPageChange={ this.handlePageChange }
				/>
			</div>
		);
	}

	componentDidMount() {
		const { onPageLoad, page } = this.props;
		onPageLoad(page);
	}

	handlePageChange = (nextPage) => {
		const { onPageChange } = this.props;
		onPageChange(nextPage);
	}
}