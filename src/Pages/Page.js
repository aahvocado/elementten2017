import React, { Component } from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';

/* components */
import Navigation from '../Components/Navigation';
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
		previousPage: CONSTANTS.PAGE.SPLASH,
		pageName: 'default',
		onPageChange: () => Promise.resolve(),
	};

	state = {
    	menuVisible: false,
    }

	render(){
		const { page, pageName, previousPage } = this.props;
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
					previousPage={ previousPage }
					menuVisible={ menuVisible }
					onPageChange={ this.handlePageChange }
				/>

				<div className={cx('et-page__inner')}>
					<h2 className={ cx('et-page__title', titleModifier)}>{ pageName }</h2>

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

	handlePageChange = (nextPage) => {
		const { onPageChange } = this.props;
		onPageChange(nextPage);
	}

	handleMenuToggle = () => {
		const { menuVisible } = this.state;
		this.setState({ menuVisible: !menuVisible });
	}
}