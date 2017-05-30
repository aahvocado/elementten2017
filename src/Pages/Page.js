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
import '../Styles/page.css';

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

		const titleModifier = {
			'projects-color': page === CONSTANTS.PAGE.PROJECTS,
			'games-color': page === CONSTANTS.PAGE.GAMES, 
			'about-color': page === CONSTANTS.PAGE.ABOUT, 
		};

		return (
			<div className={cx('et-page')}>
				<HamburgerMenu 
					page={ page }
					onClick={ this.handleMenuToggle }
					active={ menuVisible }
				/>
			
				<Navigation
					vertical
					page={ page }
					menuVisible={ menuVisible }
				/>

				<div className={cx('et-page__inner')}>
					<h2 className={ cx('et-page__title', titleModifier)}>{ page }</h2>

					{ this.renderPageInner() }
				</div>
			</div>
		);
	}

	renderPageInner() {
		//extend this
		return (
			<div>extend this function</div>
		);
	}

	handleMenuToggle = () => {
		const { menuVisible } = this.state;
		this.setState({ menuVisible: !menuVisible });
	}
}