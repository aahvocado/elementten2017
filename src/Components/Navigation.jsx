import React from 'react';

/* components */
import FloatingButton from '../Components/FloatingButton';

export default class Navigation extends React.Component {
	static get defaultProps() {
        return {
        }
    }

	render(){
		return (
			<nav role='navigation'>

				<FloatingButton txt='this is a link'
					PromiseLinkDidPress={ () => {
						console.log('it worked');
					}} />

			</nav>
		);
	}
}