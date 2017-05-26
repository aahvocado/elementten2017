import React from 'react';
import cx from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {CONSTANTS} from '../constants';

/* pages */
import Home from '../Pages/Home';
import Splash from '../Pages/Splash';

/* components */
import Header from '../Components/Header';

/* styles */
import '../Styles/styles.css';

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
					<ReactCSSTransitionGroup
						className='floating-button-container'
						transitionName="pop-in"
						transitionAppear={true}
	      				transitionAppearTimeout={1000}
						transitionEnterTimeout={1200}
						transitionLeaveTimeout={1000}
					>
						<Header 
							onHeaderClick={ this.navToHome }
						/>

						<Splash 
							onNavClick={ this.handleNavDidClick }
						/>
					</ReactCSSTransitionGroup>
				}
				{ currentPage !== CONSTANTS.PAGE.SPLASH &&
					<ReactCSSTransitionGroup
						className='floating-button-container'
						transitionName="pop-in"
						transitionAppear={true}
	      				transitionAppearTimeout={1000}
						transitionEnterTimeout={1200}
						transitionLeaveTimeout={1000}
					>
						<Header 
							onHeaderClick={ this.navToHome }
						/>
						<Home
							currentPage={ currentPage }
							onNavClick={ this.handleNavDidClick }
						/>
					</ReactCSSTransitionGroup>
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