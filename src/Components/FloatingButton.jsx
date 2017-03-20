import React from 'react';
import cx from 'classnames';

/* styles */
import '../Styles/floating-button.css';

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
					onClick={this.props.PromiseLinkDidPress}>
					
				{txt}
			</button>
		);
	}
}