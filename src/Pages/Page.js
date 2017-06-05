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
				onClick={ this.handleInnerClick }
			>
				<h2 className={ cx('et-page__title', titleModifier)}>{ pageName }</h2>

				{ this.renderPageInner() }
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
}