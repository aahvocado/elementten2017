import React from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
		onPageChange: () => Promise.resolve(),
    };

	render(){
		const { page, vertical, menuVisible } = this.props;

		const modifiers = {
			'mod-vertical': vertical,
			'nav-open': menuVisible,
			'nav-closed': !menuVisible,
		}
		
		return (
			<nav 
				role='navigation' 
				className={ cx('navigation-component', modifiers) }
			>
				{ vertical &&
					<ReactCSSTransitionGroup
						transitionName="speed-pop-in"
						transitionAppear={true}
	      				transitionAppearTimeout={1000}
						transitionEnterTimeout={1200}
						transitionLeaveTimeout={1000}>
						<Link 
							className="nav-title"
							onClick={ this.handleNavSplash }
							to={ CONSTANTS.ROUTES.SPLASH }
						>
							Daniel Xiao
						</Link>
					</ReactCSSTransitionGroup>
				}
				<ReactCSSTransitionGroup
					className='floating-button-container'
					transitionName="pop-in"
					transitionAppear={true}
      				transitionAppearTimeout={200 + 1000}
					transitionEnterTimeout={1200}
					transitionLeaveTimeout={1000}>
					<NavButton 
						txt='Projects'
						wrapperCls="projects-color"
						page={ CONSTANTS.PAGE.PROJECTS }
						active={ page === CONSTANTS.PAGE.PROJECTS }
						linkPath={ CONSTANTS.ROUTES.PROJECTS }
						onNavClick={ this.handlePageChange } />
				</ReactCSSTransitionGroup>

				<ReactCSSTransitionGroup
					className='floating-button-container'
					transitionName="pop-in"
					transitionAppear={true}
      				transitionAppearTimeout={400 + 1000}
					transitionEnterTimeout={1200}
					transitionLeaveTimeout={1000}>
					<NavButton 
						txt='Games'
						wrapperCls="games-color"
						page={ CONSTANTS.PAGE.GAMES }
						active={ page === CONSTANTS.PAGE.GAMES }
						linkPath={ CONSTANTS.ROUTES.GAMES }
						onNavClick={ this.handlePageChange } />
				</ReactCSSTransitionGroup>

				<ReactCSSTransitionGroup
					className='floating-button-container'
					transitionName="pop-in"
					transitionAppear={true}
      				transitionAppearTimeout={600 + 1000}
					transitionEnterTimeout={1400}
					transitionLeaveTimeout={1000}>
					<NavButton 
						txt='About'
						wrapperCls="about-color"
						page={ CONSTANTS.PAGE.ABOUT }
						active={ page === CONSTANTS.PAGE.ABOUT }
						linkPath={ CONSTANTS.ROUTES.ABOUT }
						onNavClick={ this.handlePageChange } />
				</ReactCSSTransitionGroup>

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