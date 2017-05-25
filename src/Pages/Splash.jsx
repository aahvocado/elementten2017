import React, { Component } from 'react';
import cx from 'classnames';

/* components */
import Navigation from '../Components/Navigation';

export default class Splash extends Component {
	static defaultProps = {
		onNavClick: () => Promise.resolve(),
	};

	render(){
		const { onNavClick } = this.props;

		return (
			<div className={cx('center-container')}>
				<Navigation
					PromiseNavigationDidPress={ onNavClick }
					/>
			</div>
		);
	}
}