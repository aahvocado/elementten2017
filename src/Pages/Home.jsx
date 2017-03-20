import React from 'react';
import {CONSTANTS} from '../constants';

/* components */
import Navigation from '../Components/Navigation';
import FloatingPlanet from '../Components/FloatingPlanet';

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
        this.handleNavigationDidClick = this.handleNavigationDidClick.bind(this);
    }

	static get defaultProps() {
        return {

        }
    }

	render(){
		const { currentPage } = this.state;

		return (
			<div className='home-page'>
				<div className='center-container'>
					<Navigation
						selected={currentPage} 
						PromiseNavigationDidPress={this.handleNavigationDidClick}
						/>

					<Projects
						active={currentPage === CONSTANTS.PAGE.HOME}
						/>

					<Projects
						active={currentPage === CONSTANTS.PAGE.PROJECTS}
						/>

					<Projects
						active={currentPage === CONSTANTS.PAGE.GAMES}
						/>

					<Projects
						active={currentPage === CONSTANTS.PAGE.ABOUT}
						/>
				</div>

				<FloatingPlanet />
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
}