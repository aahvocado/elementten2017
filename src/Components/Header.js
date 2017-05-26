import React from 'react';
import cx from 'classnames';
// import {CONSTANTS} from '../constants';

/* components */
// import Navigation from '../Components/Navigation';

/* styles */
import '../Styles/header.css';

/*
	Header
*/
export default class Header extends React.Component {
	render(){
		return (
			<header 
				className={ cx('et-header') }
				onClick={ this.handleHeaderClick }
			>
				<h1 className='title'>Daniel Xiao</h1>
				<span className='subtitle'>is ElementTen</span>
			</header>
		);
	}

	handleHeaderClick = () => {
		const { onHeaderClick } = this.props;
		onHeaderClick();
	}
}