import React from 'react';
import cx from 'classnames';
import {CONSTANTS} from '../constants';

/* components */
import Navigation from '../Components/Navigation';

/* pages */
import Projects from '../Pages/Projects';

/* styles */
import '../Styles/home.css';

/*
	Home
*/
export default class Home extends React.Component {
	static defaultProps = {
		currentPage: CONSTANTS.PAGE.HOME
	};

	render(){
		const { currentPage } = this.props;

		return (
			<div className={cx('center-container')}>
				<Navigation
					selected={currentPage} 
					PromiseNavigationDidPress={this.handleNavigationDidClick}
					/>

				<Projects
					pageName='development'
					active={currentPage === CONSTANTS.PAGE.PROJECTS}
					/>

				<Projects
					pageName='games'
					active={currentPage === CONSTANTS.PAGE.GAMES}
					/>

				<Projects
					pageName='design'
					active={currentPage === CONSTANTS.PAGE.ABOUT}
					/>
			</div>
		);
	}
}