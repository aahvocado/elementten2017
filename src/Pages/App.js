import React, { Component } from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';

/* pages */
import Splash from '../Pages/Splash';
import ProjectPage from '../Pages/ProjectPage';

/* styles */
import '../Styles/styles.css';
import '../Styles/animations.css';
import '../Styles/react-animations.css';

/*
	Primary page
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
				</div>
			</Router>
		);
	}

	/* handle the button that was clicked */
	handleNavDidClick = (nextPage) => {
		switch(nextPage) {
			case CONSTANTS.NAVIGATION.SPLASH:
				this.handlePageChange(CONSTANTS.PAGE.SPLASH);
				break;
			case CONSTANTS.NAVIGATION.HOME:
				this.handlePageChange(CONSTANTS.PAGE.HOME);
				break;
			case CONSTANTS.NAVIGATION.PROJECTS:
				this.handlePageChange(CONSTANTS.PAGE.PROJECTS);
				break;
			case CONSTANTS.NAVIGATION.GAMES:
				this.handlePageChange(CONSTANTS.PAGE.GAMES);
				break;
			case CONSTANTS.NAVIGATION.ABOUT:
				this.handlePageChange(CONSTANTS.PAGE.ABOUT);
				break;
			default:
				break;
		}
	}	

	/* handle switching to another page */
	handlePageChange = (newPage) => {
		const { currentPage } = this.state;
		this.setState( {previousPage: currentPage, currentPage: newPage, menuVisible: false} );
	}

	/* shortcuts */
	navToHome = () => {
		this.handlePageChange(CONSTANTS.PAGE.SPLASH);
	}
}