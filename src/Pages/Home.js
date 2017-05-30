import React from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';

/* components */
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';
import HamburgerMenu from '../Components/HamburgerMenu';

/* pages */
import ProjectList from '../Pages/ProjectList';

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
				<HamburgerMenu 
					onClick={ this.handleMenuToggle }
					page={ currentPage }
					active={ menuVisible }
				/>
				
				<div className={cx('center-container')}>
					<Navigation
						vertical
						menuVisible={ menuVisible }
						previousPage={ previousPage }
						currentPage={ currentPage } 
						onNavClick={ this.handleNavDidClick }
					/>

					<ProjectList
						pageName='development'
						active={currentPage === CONSTANTS.PAGE.PROJECTS}
					/>

					<ProjectList
						pageName='games'
						active={currentPage === CONSTANTS.PAGE.GAMES}
					/>

					<ProjectList
						pageName='about'
						active={currentPage === CONSTANTS.PAGE.ABOUT}
					/>
				</div>
			</div>
		);
	}

	handleNavDidClick = (nextPage) => {
		const { onNavClick } = this.props;
		onNavClick(nextPage);
	}
}