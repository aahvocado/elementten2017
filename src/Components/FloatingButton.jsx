import React from 'react';
import cx from 'classnames';

/* styles */
import '../Styles/floating-button.css';
import '../Styles/floating-button-animation.css';

/* kinda generic button actually */
export default class FloatingButton extends React.Component {
	static get defaultProps() {
        return {
			txt: '',
			active: false,
			PromiseLinkDidPress: () => {}
        }
    }

	render(){
		const { txt, active } = this.props;

		return (
			<button	className={cx('floating-button-component', active ? 'active':'')}
					key={`${txt}-key`}
					onClick={this.props.PromiseLinkDidPress}>
					
				{txt}
			</button>
		);
	}
}