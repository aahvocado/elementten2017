import React from 'react';

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
        	currentPage: Home.CONSTANTS.PAGE.HOME
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
						PromiseNavigationDidPress={this.handleNavigationDidClick}
						/>

					<Projects
						active={currentPage === Home.CONSTANTS.PAGE.HOME}
						/>

					<Projects
						active={currentPage === Home.CONSTANTS.PAGE.PROJECTS}
						/>

					<Projects
						active={currentPage === Home.CONSTANTS.PAGE.GAMES}
						/>

					<Projects
						active={currentPage === Home.CONSTANTS.PAGE.ABOUT}
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
				this.handlePageChange(Home.CONSTANTS.PAGE.HOME);
				break;
			case 'projects':
				this.handlePageChange(Home.CONSTANTS.PAGE.PROJECTS);
				break;
			case 'games':
				this.handlePageChange(Home.CONSTANTS.PAGE.GAMES);
				break;
			case 'about':
				this.handlePageChange(Home.CONSTANTS.PAGE.ABOUT);
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

/* todo: constants file */
Home.CONSTANTS = {
	PAGE: {
		HOME: 'home-page',
		PROJECTS: 'project-page',
		GAMES: 'games-page',
		ABOUT: 'about-page'
	}
}