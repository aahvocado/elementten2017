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
	handleNavDidClick = (e) => {
		const pageName = e.target.innerText.toLowerCase() || e;//todo: this properly
		switch(pageName) {
			case 'splash':
				this.handlePageChange(CONSTANTS.PAGE.SPLASH);
				break;
			case 'home':
				this.handlePageChange(CONSTANTS.PAGE.HOME);
				break;
			case 'projects':
				this.handlePageChange(CONSTANTS.PAGE.PROJECTS);
				break;
			case 'games':
				this.handlePageChange(CONSTANTS.PAGE.GAMES);
				break;
			case 'about':
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