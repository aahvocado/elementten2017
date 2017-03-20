import React from 'react';

/* components */
import FloatingButton from '../Components/FloatingButton';

/* styles */
import '../Styles/navigation.css';

export default class Navigation extends React.Component {
	static get defaultProps() {
        return {
        }
    }

	render(){
		return (
			<nav role='navigation' className='navigation-component'>

				<FloatingButton txt='Home'
					PromiseLinkDidPress={ () => { console.log('it worked'); }} />

				<FloatingButton txt='Projects'
					PromiseLinkDidPress={ () => { console.log('it worked'); }} />

				<FloatingButton txt='Games'
					PromiseLinkDidPress={ () => { console.log('it worked'); }} />

				<FloatingButton txt='About'
					PromiseLinkDidPress={ () => { console.log('it worked'); }} />

			</nav>
		);
	}
}