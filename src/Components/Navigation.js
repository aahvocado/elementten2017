import React from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';
import { Link } from 'react-router-dom';

/* components */
import NavButton from '../Components/NavButton';
import ColorStripe from '../Components/ColorStripe';
import HamburgerMenu from '../Components/HamburgerMenu';

/* styles */
import '../Styles/navigation.css';
import '../Styles/navigation-splash.css';

export default class Navigation extends React.Component {
	static defaultProps = {
    	page: CONSTANTS.PAGE.SPLASH,
    	previousPage: CONSTANTS.PAGE.SPLASH,
		fadeIn: false,
		isSplashPage: false,
		onPageChange: () => Promise.resolve(),
    };

    state = {
    	menuVisible: false,
    }

	render(){
		const { page, fadeIn, isSplashPage } = this.props;
		const { menuVisible } = this.state;

		const modifiers = {
			'mod-splash-nav': isSplashPage,
			'nav-open': menuVisible,
			'nav-closed': !menuVisible,

			'mod-projects-page': page === CONSTANTS.PAGE.PROJECTS,
			'mod-games-page': page === CONSTANTS.PAGE.GAMES,
			'mod-about-page': page === CONSTANTS.PAGE.ABOUT,
		}
		
		return (
			<div className={ cx('et-navigation', modifiers) }>
				{ page !== CONSTANTS.PAGE.SPLASH &&
					<HamburgerMenu 
						page={ page }
						active={ menuVisible }
						onClick={ this.handleMenuToggle }
					/>
				}

				<nav 
					className={ cx('et-navigation__menu') }
					role='navigation' 
				>
	
					{ !isSplashPage &&
						<Link 
							className={ cx('et-navigation__menu__title', 'animation--text-shadow-raise-small') }
							onClick={ this.handleNavSplash }
							to={ CONSTANTS.ROUTES.SPLASH }
						>
							<h1 className='title'>Daniel<br/>Xiao</h1>
						</Link>

					}
					
					<NavButton 
						txt='Games'
						wrapperCls={ cx('games-color') }
						fadeIn={ fadeIn }
						isSplashPage={ isSplashPage }
						page={ CONSTANTS.PAGE.GAMES }
						active={ page === CONSTANTS.PAGE.GAMES }
						linkPath={ CONSTANTS.ROUTES.GAMES }
						onNavClick={ this.handlePageChange } />
	
					<NavButton 
						txt='Projects'
						wrapperCls={ cx('projects-color') }
						fadeIn={ fadeIn }
						isSplashPage={ isSplashPage }
						page={ CONSTANTS.PAGE.PROJECTS }
						active={ page === CONSTANTS.PAGE.PROJECTS }
						linkPath={ CONSTANTS.ROUTES.PROJECTS }
						onNavClick={ this.handlePageChange } />
	
					<NavButton 
						txt='About'
						wrapperCls={ cx('about-color') }
						fadeIn={ fadeIn }
						isSplashPage={ isSplashPage }
						page={ CONSTANTS.PAGE.ABOUT }
						active={ page === CONSTANTS.PAGE.ABOUT }
						linkPath={ CONSTANTS.ROUTES.ABOUT }
						onNavClick={ this.handlePageChange } />
	
					{ this.renderNavigationStripe() }
	
				</nav>
			</div>
		);
	}

	renderNavigationStripe() {
		const { page, previousPage, isSplashPage } = this.props;
		return (
			<div className='nav-color-stripe-container'>
				{ page === CONSTANTS.PAGE.PROJECTS &&
					<ColorStripe
						previousPage={ previousPage }
						page={ page }
						disabled={ isSplashPage }
					/>
				}
				{ page === CONSTANTS.PAGE.GAMES &&
					<ColorStripe
						previousPage={ previousPage }
						page={ page }
						disabled={ isSplashPage }
					/>
				}
				{ page === CONSTANTS.PAGE.ABOUT &&
					<ColorStripe
						previousPage={ previousPage }
						page={ page }
						disabled={ isSplashPage }
					/>
				}
			</div>
		);
	}

	handleMenuToggle = () => {
		const { menuVisible } = this.state;
		this.setState({ menuVisible: !menuVisible });
	}

	handlePageChange = (nextPage) => {
		const { onPageChange } = this.props;
		this.setState({ menuVisible: false });
		onPageChange(nextPage);
	}

	handleNavSplash = () => {
		const { onPageChange } = this.props;
		onPageChange(CONSTANTS.PAGE.SPLASH); 
	}
}