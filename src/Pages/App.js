import React, { Component } from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';

/* pages */
import Splash from '../Pages/Splash';
import ProjectPage from '../Pages/ProjectPage';
import GamesPage from '../Pages/GamesPage';

/* styles */
import '../Styles/styles.css';
import '../Styles/animations.css';
import '../Styles/react-animations.css';

/*
	Primary App Controller
*/
export default class App extends Component {
	state = {
    	currentPage: CONSTANTS.PAGE.SPLASH,
    	menuVisible: false,
    }

	render(){
		const { currentPage, previousPage, menuVisible } = this.state;
		
		const isInnerPage = currentPage !== CONSTANTS.PAGE.SPLASH;
		const modifiers = {
			'style__inner-page': isInnerPage,
			'style__splash-page': !isInnerPage,
		};

		return (
			<Router>
				<div className={cx('et-main', modifiers, currentPage)}>
					<Route exact path={ CONSTANTS.ROUTES.SPLASH } 
						component={Splash} 
					/>
					<Route path={ CONSTANTS.ROUTES.PROJECTS }
						component={ProjectPage} 
					/>
					<Route path={ CONSTANTS.ROUTES.GAMES }
						component={GamesPage} 
					/>
					<Route path={ CONSTANTS.ROUTES.ABOUT }
						component={GamesPage} 
					/>
				</div>
			</Router>
		);
	}
}