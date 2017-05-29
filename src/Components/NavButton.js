import React from 'react';
import cx from 'classnames';

/* styles */
import '../Styles/nav-button.css';

/* kinda generic button actually */
export default class NavButton extends React.Component {
	static defaultProps = {
    	wrapperCls: '',
		txt: '',
		active: false,
		onclick: () => Promise.resolve(),
		style: {},
		action: '',
		modSquare: false,
    };

	render(){
		const { wrapperCls, txt, active, style, modSquare } = this.props;

		const modifiers = {
			'active': active,
			'mod-square-button': modSquare,
		}

		return (
			<button	className={cx('nav-button-component', modifiers, wrapperCls)}
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