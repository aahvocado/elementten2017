import React from 'react';
import {CONSTANTS} from '../constants';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* components */
import FloatingButton from '../Components/FloatingButton';

/* styles */
import '../Styles/navigation.css';

export default class Navigation extends React.Component {
	static get defaultProps() {
        return {
        	selected: CONSTANTS.PAGE.HOME,
        	PromiseNavigationDidPress: () => {}
        }
    }

	render(){
		const { selected } = this.props;
		
		return (
			<nav role='navigation' className='navigation-component'>

				<ReactCSSTransitionGroup
					className='navigation-component'
					transitionName="pop-in"
					transitionAppear={true}
      				transitionAppearTimeout={1000}
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={300}>

				{/*<FloatingButton txt='Home'
					active={selected === CONSTANTS.PAGE.HOME}
					PromiseLinkDidPress={this.props.PromiseNavigationDidPress} />*/}

					<FloatingButton txt='Projects'
						active={selected === CONSTANTS.PAGE.PROJECTS}
						PromiseLinkDidPress={this.props.PromiseNavigationDidPress} />

					<FloatingButton txt='Games'
						active={selected === CONSTANTS.PAGE.GAMES}
						PromiseLinkDidPress={this.props.PromiseNavigationDidPress} />

					<FloatingButton txt='About'
						active={selected === CONSTANTS.PAGE.ABOUT}
						PromiseLinkDidPress={this.props.PromiseNavigationDidPress} />


				</ReactCSSTransitionGroup>

			</nav>
		);
	}
}