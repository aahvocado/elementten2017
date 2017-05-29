import React from 'react';
import cx from 'classnames';
import {CONSTANTS} from '../constants';

/* components */
import Navigation from '../Components/Navigation';

/* pages */
import Projects from '../Pages/Projects';

/* styles */
import '../Styles/home.css';

/*
	Home
*/
export default class Home extends React.Component {
	static defaultProps = {
		currentPage: CONSTANTS.PAGE.HOME,
		menuVisible: false,
		onNavClick: () => Promise.resolve(),
	};

	render(){
		const { currentPage, previousPage, menuVisible } = this.props;

		return (
			<div className={cx('center-container')}>

				<Navigation
					vertical
					menuVisible={ menuVisible }
					previousPage={ previousPage }
					currentPage={ currentPage } 
					onNavClick={ this.handleNavDidClick }
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
		);
	}

	handleNavDidClick = (nextPage) => {
		const { onNavClick } = this.props;
		onNavClick(nextPage);
	}
}