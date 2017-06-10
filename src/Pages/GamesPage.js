import React from 'react';
import { CONSTANTS } from '../constants';
import ProjectsDetails from '../ProjectsDetails';

/* pages */
import Page from '../Pages/Page';
import ProjectList from '../Pages/ProjectList';

/*
	page for games projects
*/
export default class ProjectPage extends Page {
	static defaultProps = {
		page: CONSTANTS.PAGE.GAMES,
		pageName: 'games',
		data: ProjectsDetails().filter((item) => { return item.category === CONSTANTS.CATEGORY.GAMES }),
	};

	renderPageInner() {
		const { data } = this.props;
		const { selectedIdx } = this.state;

		return (
			<ProjectList
				wrapperCls="et-page__content-container"
				selectedIdx={ selectedIdx }
				data={ data }
				onSelectedChange={ this.handleIndexChange }
			/>
		);
	}
}