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
    	pageName: '',
    	active: false,
    };

	render(){
		const { pageName, active } = this.props;

		let renderedProjects = [];
		ProjectsDetails().forEach((project, idx) => {
			if(project.category === pageName){
				renderedProjects.push(
					<ProjectItem key={'project-item-'+idx+'-key'}
						{...project}/>
				);
			}
		});

		const modifiers = {
			'active': active,
			'inactive': !active,
		};

		/* TODO NOT RIGHT PAGES */
		const titleModifier = {
			'projects-color': pageName === 'development',
			'games-color': pageName === 'games', 
			'about-color': pageName === 'about', 
		};

		return (
			<div className={ cx(`${pageName}-page`, 'projects-page', modifiers) }>
				<h2 className={ cx('project-page-title', titleModifier)}>{ pageName }</h2>

				<ul className='project-list'>
					{ renderedProjects }
				</ul>
			</div>
		);
	}
}