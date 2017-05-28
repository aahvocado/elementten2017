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
		transitionAppear: true,
		transitionEnter: true,
		transitionLeave: true,
		transitionAppearTimeout: 0,
		transitionEnterTimeout: 0,
		transitionLeaveTimeout: 0,
	};

	render(){
		const { children, wrapperCls } = this.props;
		const { 
			transitionName,
			transitionAppear,
			transitionAppearTimeout,
			transitionEnter,
			transitionEnterTimeout,
			transitionLeave,
			transitionLeaveTimeout,
		} = this.props;
		return (
			<ReactCSSTransitionGroup
				className={ cx('et-floating-container', wrapperCls) }
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