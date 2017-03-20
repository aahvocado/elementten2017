import React from 'react';

/* components */
import FloatingButton from '../Components/FloatingButton';

/* styles */
import '../Styles/navigation.css';

export default class Navigation extends React.Component {
	static get defaultProps() {
        return {
        	PromiseNavigationDidPress: () => {}
        }
    }

	render(){
		return (
			<nav role='navigation' className='navigation-component'>

				<FloatingButton txt='Home'
					PromiseLinkDidPress={this.props.PromiseNavigationDidPress} />

				<FloatingButton txt='Projects'
					PromiseLinkDidPress={this.props.PromiseNavigationDidPress} />

				<FloatingButton txt='Games'
					PromiseLinkDidPress={this.props.PromiseNavigationDidPress} />

				<FloatingButton txt='About'
					PromiseLinkDidPress={this.props.PromiseNavigationDidPress} />

			</nav>
		);
	}
}