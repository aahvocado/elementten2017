import React from 'react';
import cx from 'classnames';
import ProjectsDetails from '../ProjectsDetails';

/* components */
import ProjectItem from '../Components/ProjectItem';

/* styles */
import '../Styles/project-list.css';

/*
	ProjectList
	generic page that creates a list
*/
export default class ProjectList extends React.Component {
	static defaultProps = {
		data: [],
    	pageName: '',
    };

	render(){
		const { data, pageName } = this.props;

		let renderedProjects = [];
		data.forEach((project, idx) => {
			renderedProjects.push(
				<ProjectItem 
					key={'project-item-'+idx+'-key'}
					{...project}
				/>
			);
		});		

		return (
			<div className={ cx('et-list-container') }>
				<ul className='et-project-list'>
					{ renderedProjects }
				</ul>
			</div>
		);
	}
}