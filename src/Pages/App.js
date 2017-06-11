import React, { Component } from 'react';
import cx from 'classnames';
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

/* components */
import Navigation from '../Components/Navigation';

/*
	Primary App Controller
*/
export default class App extends Component {
	state = {
		currentPage: undefined,
		previousPage: undefined,
    }

	render(){
		const { currentPage, previousPage } = this.state;

		return (
			<Router>
				<div className="et-main">

					{ currentPage !== CONSTANTS.PAGE.SPLASH &&
						<Navigation
							vertical
							page={ currentPage }
							previousPage={ previousPage }
							onPageChange={ this.handlePageChange }
						/>
					}

					<div className={cx('et-page')}>
						<Route exact path={ CONSTANTS.ROUTES.SPLASH } 
							component={() => (
								<Splash
									onPageChange={ this.handlePageChange }
									onPageLoad={ this.handlePageLoad }
								/>
							)}
						/>
						<Route path={ CONSTANTS.ROUTES.PROJECTS }
							component={() => (
								<ProjectPage
									previousPage={ previousPage }
									onPageChange={ this.handlePageChange }
									onPageLoad={ this.handlePageLoad }
								/>
							)}
						/>
						<Route path={ CONSTANTS.ROUTES.GAMES }
							component={() => (
								<GamesPage 
									previousPage={ previousPage }
									onPageChange={ this.handlePageChange }
									onPageLoad={ this.handlePageLoad }
								/>
							)} 
						/>
						<Route path={ CONSTANTS.ROUTES.ABOUT }
							component={() => (
								<AboutPage 
									previousPage={ previousPage }
									onPageChange={ this.handlePageChange }
									onPageLoad={ this.handlePageLoad }
								/>
							)}
						/>
					</div>
				</div>
			</Router>
		);
	}

	handlePageLoad = (newPage) => {
		const { currentPage } = this.state;
		if (currentPage === undefined) {
			this.setState({ currentPage: newPage });
		}
	}

	handlePageChange = (nextPage) => {
		const { currentPage } = this.state;
		if (nextPage !== currentPage) {
			this.setState({ previousPage: currentPage, currentPage: nextPage });
		}
	}
}