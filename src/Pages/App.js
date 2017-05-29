import React from 'react';
import cx from 'classnames';
import {CONSTANTS} from '../constants.js';

/* pages */
import Home from '../Pages/Home';
import Splash from '../Pages/Splash';

/* components */
import Header from '../Components/Header';
// import FloatingContainer from '../Components/FloatingContainer';

/* styles */
import '../Styles/styles.css';
import '../Styles/animations.css';

/*
	Primary page
*/
export default class App extends React.Component {

	state = {
    	currentPage: CONSTANTS.PAGE.SPLASH,
    }

	render(){
		const { currentPage } = this.state;
		
		const isInnerPage = currentPage !== CONSTANTS.PAGE.SPLASH;
		const modifiers = {
			'style__inner-page': isInnerPage,
			'style__splash-page': !isInnerPage,
		};

		return (
			<div className={cx('et-main', modifiers)}>
				
				{ currentPage === CONSTANTS.PAGE.SPLASH &&
					<Header
						onHeaderClick={ this.navToHome }
					/>
				}
				{ currentPage === CONSTANTS.PAGE.SPLASH &&
					<Splash 
						onNavClick={ this.handleNavDidClick }
					/>
				}

				{ currentPage !== CONSTANTS.PAGE.SPLASH &&
					<Home
						currentPage={ currentPage }
						onNavClick={ this.handleNavDidClick }
					/>
				}
			</div>
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
		this.setState({currentPage: newPage});
	}

	/* shortcuts */
	navToHome = () => {
		this.handlePageChange(CONSTANTS.PAGE.SPLASH);
	}
}