import React from 'react';
import cx from 'classnames';

/* styles */
import '../Styles/floating-button.css';
import '../Styles/floating-button-animation.css';

/* kinda generic button actually */
export default class FloatingButton extends React.Component {
	static get defaultProps() {
        return {
        	wrapperCls: '',
			txt: '',
			active: false,
			onclick: () => Promise.resolve(),
			style: {},
			action: '',
        }
    }

	render(){
		const { wrapperCls, txt, active, style } = this.props;

		const modifiers = {
			'active': active,
		}

		return (
			<button	className={cx('floating-button-component', modifiers, wrapperCls)}
					style={style}
					key={`${txt}-key`}
					onClick={ this.handleOnClick }>
				{txt}
			</button>
		);
	}

	handleOnClick = (e) => {
		const { onClick, action } = this.props;
		onClick(action);
	}
}