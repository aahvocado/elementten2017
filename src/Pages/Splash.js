import React, { Component } from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';

/* components */
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';

import '../Styles/splash-page.css';

export default class Splash extends Component {
	static defaultProps = {
		onNavClick: () => Promise.resolve(),
	};

	render(){
		return (
			<div className={cx('et-splash-page')}>
				<Header
					onHeaderClick={ this.navToSplash }
				/>

				<Navigation
					onNavClick={ this.handleNavDidClick }
				/>
			</div>
		);
	}

	handleNavDidClick = (nextPage) => {
		const { onNavClick } = this.props;
		onNavClick(nextPage);
	}

	navToSplash = () => {
		const { onNavClick } = this.props;
		onNavClick(CONSTANTS.NAVIGATION.SPLASH);
	}
}