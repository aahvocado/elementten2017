import React, { Component } from 'react';
// import cx from 'classnames';
import { CONSTANTS } from '../constants.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';

/* pages */
import Splash from '../Pages/Splash';
import ProjectPage from '../Pages/ProjectPage';
import GamesPage from '../Pages/GamesPage';
import AboutPage from '../Pages/AboutPage';

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
		previousPage: CONSTANTS.PAGE.SPLASH,
	}

	render(){
		const { previousPage } = this.state;

		return (
			<Router>
				<div className="et-main">
					<Route exact path={ CONSTANTS.ROUTES.SPLASH } 
						component={Splash} 
					/>
					<Route path={ CONSTANTS.ROUTES.PROJECTS }
						component={() => (
							<ProjectPage
								previousPage={ previousPage }
								onPageChange={ this.handlePageChange } 
							/>
						)}
					/>
					<Route path={ CONSTANTS.ROUTES.GAMES }
						component={() => (
							<GamesPage 
								previousPage={ previousPage }
								onPageChange={ this.handlePageChange } 
							/>
						)} 
					/>
					<Route path={ CONSTANTS.ROUTES.ABOUT }
						component={() => (
							<AboutPage 
								previousPage={ previousPage }
								onPageChange={ this.handlePageChange } 
							/>
						)}
					/>
				</div>
			</Router>
		);
	}

	handlePageChange = (nextPage) => {
		const { currentPage } = this.state;
		this.setState({previousPage: currentPage, currentPage: nextPage});
	}
}