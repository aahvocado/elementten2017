import React from 'react';

/* components */
import Navigation from '../Components/Navigation';
import FloatingPlanet from '../Components/FloatingPlanet';

/* styles */
import '../Styles/styles.css';
import '../Styles/home.css';

/*
	Home should be the top level Page that holds all the other Pages
*/
export default class Home extends React.Component {
	static get defaultProps() {
        return {
        	currentPage: Home.CONSTANTS.PAGE.HOME
        }
    }

	render(){
		return (
			<div className='home-component'>
				<Navigation />

				<div className='center-text'>hello world</div>

				<FloatingPlanet />
			</div>
		);
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