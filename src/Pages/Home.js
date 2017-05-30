import React from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';

/* components */
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';
import HamburgerMenu from '../Components/HamburgerMenu';

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
				{ currentPage !== CONSTANTS.PAGE.SPLASH &&
					<HamburgerMenu 
						onClick={ this.handleMenuToggle }
						page={ currentPage }
						active={ menuVisible }
					/>
				}

				{ currentPage === CONSTANTS.PAGE.SPLASH &&
					<Header
						onHeaderClick={ this.navToHome }
					/>
				}
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