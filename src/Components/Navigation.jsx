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

    constructor(props) {
    	super(...props);
    	this.state = {
    		offset1: 0,
    		offset2: 0,
    		offset3: 0,
    	}
    }

	render(){
		const { selected } = this.props;
		const { offset1, offset2, offset3 } = this.state;
		
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
						style={{ marginTop: offset1 }}
						active={selected === CONSTANTS.PAGE.PROJECTS}
						PromiseLinkDidPress={this.props.PromiseNavigationDidPress} />

					<FloatingButton txt='Games'
						style={{ marginTop: offset2 }}
						active={selected === CONSTANTS.PAGE.GAMES}
						PromiseLinkDidPress={this.props.PromiseNavigationDidPress} />

					<FloatingButton txt='About'
						style={{ marginTop: offset3 }}
						active={selected === CONSTANTS.PAGE.ABOUT}
						PromiseLinkDidPress={this.props.PromiseNavigationDidPress} />


				</ReactCSSTransitionGroup>

			</nav>
		);
	}

	componentDidMount() {
		const offset1 = Math.random() * 100;
		const offset2 = Math.random() * 100;
		const offset3 = Math.random() * 100;
		this.setState({ offset1, offset2, offset3 });
	}
}