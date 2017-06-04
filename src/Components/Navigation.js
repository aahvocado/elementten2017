import React from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';
import { Link } from 'react-router-dom';

/* components */
import NavButton from '../Components/NavButton';
import ColorStripe from '../Components/ColorStripe';

/* styles */
import '../Styles/navigation.css';

export default class Navigation extends React.Component {
	static defaultProps = {
    	page: CONSTANTS.PAGE.SPLASH,
    	previousPage: CONSTANTS.PAGE.SPLASH,
    	vertical: false,
		menuVisible: false,
		fadeIn: false,
		onPageChange: () => Promise.resolve(),
    };

	render(){
		const { page, vertical, menuVisible, fadeIn } = this.props;

		const modifiers = {
			'mod-vertical': vertical,
			'nav-open': menuVisible,
			'nav-closed': !menuVisible,

			'mod-projects-page': page === CONSTANTS.PAGE.PROJECTS,
			'mod-games-page': page === CONSTANTS.PAGE.GAMES,
			'mod-about-page': page === CONSTANTS.PAGE.ABOUT,
		}
		
		return (
			<nav 
				role='navigation' 
				className={ cx('et-navigation', modifiers) }
			>
				{ vertical &&
					<Link 
						className={ cx('nav-title', 'animation-grow-from-bg') }
						onClick={ this.handleNavSplash }
						to={ CONSTANTS.ROUTES.SPLASH }
					>
						Daniel Xiao
					</Link>
				}
				
				<NavButton 
					txt='Games'
					wrapperCls={ cx('games-color') }
					fadeIn={ fadeIn }
					boxy={ vertical }
					page={ CONSTANTS.PAGE.GAMES }
					active={ page === CONSTANTS.PAGE.GAMES }
					linkPath={ CONSTANTS.ROUTES.GAMES }
					onNavClick={ this.handlePageChange } />

				<NavButton 
					txt='Projects'
					wrapperCls={ cx('projects-color') }
					fadeIn={ fadeIn }
					boxy={ vertical }
					page={ CONSTANTS.PAGE.PROJECTS }
					active={ page === CONSTANTS.PAGE.PROJECTS }
					linkPath={ CONSTANTS.ROUTES.PROJECTS }
					onNavClick={ this.handlePageChange } />

				<NavButton 
					txt='About'
					wrapperCls={ cx('about-color') }
					fadeIn={ fadeIn }
					boxy={ vertical }
					page={ CONSTANTS.PAGE.ABOUT }
					active={ page === CONSTANTS.PAGE.ABOUT }
					linkPath={ CONSTANTS.ROUTES.ABOUT }
					onNavClick={ this.handlePageChange } />

				{ this.renderNavigationStripe() }

			</nav>
		);
	}

	renderNavigationStripe() {
		const { page, previousPage, vertical } = this.props;
		return (
			<div className='nav-color-stripe-container'>
				{ page === CONSTANTS.PAGE.PROJECTS &&
					<ColorStripe
						previousPage={ previousPage }
						page={ page }
						disabled={ !vertical }
					/>
				}
				{ page === CONSTANTS.PAGE.GAMES &&
					<ColorStripe
						previousPage={ previousPage }
						page={ page }
						disabled={ !vertical }
					/>
				}
				{ page === CONSTANTS.PAGE.ABOUT &&
					<ColorStripe
						previousPage={ previousPage }
						page={ page }
						disabled={ !vertical }
					/>
				}
			</div>
		);
	}

	handlePageChange = (nextPage) => {
		const { onPageChange } = this.props;
		onPageChange(nextPage);
	}

	handleNavSplash = () => {
		const { onPageChange } = this.props;
		onPageChange(CONSTANTS.PAGE.SPLASH); 
	}
}