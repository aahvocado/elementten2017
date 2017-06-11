import React, { Component } from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';

/* styles */
import '../Styles/page.css';

/*
	Page
*/
export default class Page extends Component {
	static defaultProps = {
		page: undefined,
		pageName: 'default',
		data: [],
		onPageChange: () => Promise.resolve(),
	};

	state = {
		selectedIdx: undefined,
	}

	render(){
		const { page, pageName } = this.props;

		const titleModifier = {
			'projects-color': page === CONSTANTS.PAGE.PROJECTS,
			'games-color': page === CONSTANTS.PAGE.GAMES, 
			'about-color': page === CONSTANTS.PAGE.ABOUT, 
		};

		return (
			<div 
				className={cx('et-page__inner')}
				ref={ (x) => { this.pageContainer = x; } }
			>
				<h2 className={ cx('et-page__title', titleModifier)}>{ pageName }</h2>

				{ this.renderPageInner() }

				<footer className="et-footer">
					Daniel Xiao made this using <a className="href-link" href="https://github.com/facebookincubator/create-react-app">create-react-app</a>. 
					Check out this website's source code on <a className="href-link" href="https://github.com/neonwednesdays/elementten2017">Github</a>.
					<br />
					Daniel can be found at <a className="href-link" href="mailto:dxiao.ns@gmail.com">dxiao.ns@gmail.com</a>
				</footer>
			</div>
		);
	}

	componentDidMount() {
		const { onPageLoad, page } = this.props;
		onPageLoad(page);
	}

	renderPageInner() {
		// extend this
		return (
			<div>extend this function</div>
		);
	}

	handleInnerClick = () => {
		// extend this
		// this.setState({ selectedIdx: undefined });
	}

	handlePageChange = (nextPage) => {
		const { onPageChange } = this.props;
		onPageChange(nextPage);
	}

	handleIndexChange = (nextIdx) => {
		const { data } = this.props;
		const maxIdx = data.length - 1;
		let newIndex = nextIdx;
		if (newIndex > maxIdx) {
			newIndex = 0;
		} else if (newIndex < 0) {
			newIndex = maxIdx;
		};
		this.setState({ selectedIdx: newIndex });
	}

	scrollToItem = (idx) => {
		if (this.pageContainer) {
			this.pageContainer.scrollTop = 150 * idx - 10;
		}
	}
}