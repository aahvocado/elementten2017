import '../Styles/floating-container.css';

import React, { Component } from 'react';
import cx from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/*
	use this to keep a component floating so it doesn't look weird when animating things
*/
export default class FloatingContainer extends Component {
	static defaultProps = {
		transitionName:"pop-in",
		transitionAppear: false,
		transitionEnter: false,
		transitionLeave: false,
		transitionAppearTimeout: 0,
		transitionEnterTimeout: 0,
		transitionLeaveTimeout: 0,
		verticallyCentered: false,
	};

	render(){
		const { children, wrapperCls, verticallyCentered } = this.props;
		const { 
			transitionName,
			transitionAppear,
			transitionAppearTimeout,
			transitionEnter,
			transitionEnterTimeout,
			transitionLeave,
			transitionLeaveTimeout,
		} = this.props;

		const modifiers = { 
			'mod-vertically-centered': verticallyCentered,
		};

		return (
			<ReactCSSTransitionGroup
				className={ cx('et-floating-container', modifiers, wrapperCls) }
				transitionName={ transitionName }
				transitionAppear={ transitionAppear }
  				transitionAppearTimeout={ transitionAppearTimeout }
  				transitionEnter={ transitionEnter }
				transitionEnterTimeout={ transitionEnterTimeout }
				transitionLeave={ transitionLeave }
				transitionLeaveTimeout={ transitionLeaveTimeout }
			>
				{ children }
			</ReactCSSTransitionGroup>
		);
	}
}