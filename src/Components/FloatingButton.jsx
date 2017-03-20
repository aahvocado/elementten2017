import React from 'react';
import '../Styles/floating-button.css';

export default class FloatingButton extends React.Component {
	static get defaultProps() {
        return {
			txt: '',
			PromiseLinkDidPress: () => {}
        }
    }

	render(){
		const { txt } = this.props;

		return (
			<button	className='floating-button-component'
					onClick={this.props.PromiseLinkDidPress}>
					
				{txt}
			</button>
		);
	}
}