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

		/* TODO NOT RIGHT PAGES */
		const titleModifier = {
			'projects-color': pageName === 'development',
			'games-color': pageName === 'games', 
			'about-color': pageName === 'about', 
		};

		console.log(renderedProjects);

		return (
			<div className={ cx(`${pageName}-page`, 'projects-page') }>
				<h2 className={ cx('project-page-title', titleModifier)}>{ pageName }</h2>

				<ul className='project-list'>
					{ renderedProjects }
				</ul>
			</div>
		);
	}
}