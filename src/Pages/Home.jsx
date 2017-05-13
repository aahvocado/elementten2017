import React from 'react';
import cx from 'classnames';
import {CONSTANTS} from '../constants';

/* components */
import Navigation from '../Components/Navigation';
// import FloatingPlanet from '../Components/FloatingPlanet';

/* pages */
import Projects from '../Pages/Projects';

/* styles */
import '../Styles/styles.css';
import '../Styles/home.css';

/*
	Home should be the top level Page that holds all the other Pages
*/
export default class Home extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	currentPage: CONSTANTS.PAGE.HOME
        };

        this.navToHome = this.navToHome.bind(this);
        this.handleNavigationDidClick = this.handleNavigationDidClick.bind(this);
    }

	static get defaultProps() {
        return {

        }
    }

	render(){
		const { currentPage } = this.state;
		
		const isInnerPage = currentPage !== CONSTANTS.PAGE.HOME;
		const modifiers = {
			'style__inner-page': isInnerPage,
			'style__splash-page': !isInnerPage,
		};

		return (
			<div className={cx('et-main', modifiers)}>
				<header className='header-container'
						onClick={this.navToHome}>
					<h1 className='title'>Daniel Xiao</h1>
					<span className='subtitle'>is ElementTen</span>
				</header>

				<div className={cx('center-container')}>
					<Navigation
						selected={currentPage} 
						PromiseNavigationDidPress={this.handleNavigationDidClick}
						/>

					<Projects
						pageName='development'
						active={currentPage === CONSTANTS.PAGE.PROJECTS}
						/>

					<Projects
						pageName='games'
						active={currentPage === CONSTANTS.PAGE.GAMES}
						/>

					<Projects
						pageName='design'
						active={currentPage === CONSTANTS.PAGE.ABOUT}
						/>
				</div>
			</div>
		);
	}

	/* handle the button that was clicked */
	handleNavigationDidClick(e) {
		const pageName = e.target.innerText.toLowerCase();//todo: this properly
		switch(pageName) {
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
	handlePageChange(newPage) {
		this.setState({currentPage: newPage});
	}

	/* shortcuts */
	navToHome() {
		this.handlePageChange(CONSTANTS.PAGE.HOME);
	}
}