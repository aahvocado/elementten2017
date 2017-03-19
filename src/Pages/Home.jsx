import React from 'react';
// import {render} from 'react-dom';

import '../Styles/styles.css';
import '../Styles/home.css';

export default class Home extends React.Component {
	render(){
		return (
			<div className='home-component'>

				<div className='center-text'>hello world</div>
				<div className='floating-planet'></div>
			</div>
		);
	}
}