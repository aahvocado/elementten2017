import React from 'react';
import cx from 'classnames';
import {CONSTANTS} from '../constants';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* components */
import FloatingButton from '../Components/FloatingButton';

/* styles */
import '../Styles/navigation.css';

export default class Navigation extends React.Component {
	static defaultProps = {
    	selected: CONSTANTS.PAGE.HOME,
    	onNavClick: () => Promise.resolve(),
    	vertical: false,
    };

    state = {
		offsets: this.initOffsets(),
	}

	render(){
		const { selected, vertical } = this.props;
		let { offsets } = this.state;

		const isSplashPage = selected === CONSTANTS.PAGE.HOME;

		if(!isSplashPage){
			offsets = {
				marginTop: [25, 25, 25]
			}
		};

		const modifiers = {
			'mod-vertical': vertical,
		}
		
		return (
			<nav 
				role='navigation' 
				className={ cx('navigation-component', modifiers) }
			>
				<ReactCSSTransitionGroup
					className='floating-button-container'
					style={{
						marginTop: offsets.marginTop[0],
					}}
					transitionName="pop-in"
					transitionAppear={true}
      				transitionAppearTimeout={1000}
					transitionEnterTimeout={1200}
					transitionLeaveTimeout={1000}>
					<FloatingButton 
						txt='Projects'
						wrapperCls="projects-color"
						action={ CONSTANTS.NAVIGATION.PROJECTS }
						active={selected === CONSTANTS.PAGE.PROJECTS}
						onClick={ this.handleNavClick } />
				</ReactCSSTransitionGroup>

				<ReactCSSTransitionGroup
					className='floating-button-container'
					style={{
						marginTop: offsets.marginTop[1],
					}}
					transitionName="pop-in"
					transitionAppear={true}
      				transitionAppearTimeout={200 + 1000}
					transitionEnterTimeout={1200}
					transitionLeaveTimeout={1000}>
					<FloatingButton 
						txt='Games'
						wrapperCls="games-color"
						action={ CONSTANTS.NAVIGATION.GAMES }
						active={selected === CONSTANTS.PAGE.GAMES}
						onClick={ this.handleNavClick } />
				</ReactCSSTransitionGroup>

				<ReactCSSTransitionGroup
					className='floating-button-container'
					style={{
						marginTop: offsets.marginTop[2],
					}}
					transitionName="pop-in"
					transitionAppear={true}
      				transitionAppearTimeout={400 + 1000}
					transitionEnterTimeout={1400}
					transitionLeaveTimeout={1000}>
					<FloatingButton 
						txt='About'
						wrapperCls="about-color"
						action={ CONSTANTS.NAVIGATION.ABOUT }
						active={selected === CONSTANTS.PAGE.ABOUT}
						onClick={ this.handleNavClick } />
				</ReactCSSTransitionGroup>
			</nav>
		);

	}

	initOffsets() {
		let offsets = {};

		const marginTopFunc = () => { return Math.random() * 100 };
		offsets.marginTop = [marginTopFunc(), marginTopFunc(), marginTopFunc()];

		return offsets;
	}

	handleNavClick = (action) => {
		const { onNavClick } = this.props;
		onNavClick(action);
	}
}