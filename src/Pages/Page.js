import React, { Component } from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';

/* components */
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';
import HamburgerMenu from '../Components/HamburgerMenu';

/* pages */
// import ProjectList from '../Pages/ProjectList';

/* styles */
import '../Styles/home.css';

/*
	Page
*/
export default class Page extends Component {
	static defaultProps = {
		page: CONSTANTS.PAGE.HOME,
	};

	state = {
    	menuVisible: false,
    }

	render(){
		const { page } = this.props;
		const { menuVisible } = this.state;

		return (
			<div className={cx('center-container')}>
				<HamburgerMenu 
					page={ page }
					onClick={ this.handleMenuToggle }
					active={ menuVisible }
				/>
				
				<div className={cx('center-container')}>
					<Navigation
						vertical
						page={ page }
						menuVisible={ menuVisible }
					/>

					{ this.renderPageInner() }

				</div>
			</div>
		);
	}

	renderPageInner() {
		//extend this
		return (
			<div>TODO: extend this page</div>
		);
	}

	handleMenuToggle = () => {
		const { menuVisible } = this.state;
		this.setState({ menuVisible: !menuVisible });
	}
}