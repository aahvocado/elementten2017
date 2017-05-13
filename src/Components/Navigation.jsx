import React from 'react';
// import cx from 'classnames';
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

    constructor(props) {
    	super(...props);
    	this.state = {
    		offsets: this.initOffsets()
    	}
    }

	render(){
		const { selected } = this.props;
		let { offsets } = this.state;

		const isSplashPage = selected === CONSTANTS.PAGE.HOME;

		if(!isSplashPage){
			offsets = {
				marginTop: [25, 25, 25]
			}
		}
		
		return (
			<nav role='navigation' className='navigation-component'>

				{/*<FloatingButton txt='Home'
					active={selected === CONSTANTS.PAGE.HOME}
					PromiseLinkDidPress={this.props.PromiseNavigationDidPress} />*/}

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
					<FloatingButton txt='Projects'
						active={selected === CONSTANTS.PAGE.PROJECTS}
						PromiseLinkDidPress={this.props.PromiseNavigationDidPress} />
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
					<FloatingButton txt='Games'
						active={selected === CONSTANTS.PAGE.GAMES}
						PromiseLinkDidPress={this.props.PromiseNavigationDidPress} />
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
					transitionLeaveTimeout={100}>
					<FloatingButton txt='About'
						active={selected === CONSTANTS.PAGE.ABOUT}
						PromiseLinkDidPress={this.props.PromiseNavigationDidPress} />
				</ReactCSSTransitionGroup>
			</nav>
		);

	}

	initOffsets() {
		let offsets = {};

		const martinTopFunc = () => { return Math.random() * 100 };
		offsets.marginTop = [martinTopFunc(), martinTopFunc(), martinTopFunc()];

		return offsets;
	}
}