import React from 'react';

/* components */
import FloatingPlanet from '../Components/FloatingPlanet';
import FloatingButton from '../Components/FloatingButton';

/* styles */
import '../Styles/styles.css';
import '../Styles/home.css';

export default class Home extends React.Component {
	render(){
		return (
			<div className='home-component'>
				{/* todo: separate component */}
				<header>
					<nav role='navigation'>
						<FloatingButton txt='this is a link'
							PromiseLinkDidPress={ () => {
								console.log('it worked');
							}} />
					</nav>
				</header>

				<div className='center-text'>hello world</div>

				<FloatingPlanet />
			</div>
		);
	}
}