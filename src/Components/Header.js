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
				className={ cx('et-header', 'animation--text-shadow-raise') }
			>
				<h1 className='title'>Daniel<br/>Xiao</h1>
				<span className='subtitle'></span>
			</header>
		);
	}
}