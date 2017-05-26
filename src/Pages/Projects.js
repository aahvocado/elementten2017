import React from 'react';
import cx from 'classnames';
import ProjectList from '../ProjectList';

/* components */
import ProjectItem from '../Components/ProjectItem';

/* styles */
import '../Styles/project-list.css';

/*
	Projects
	generic page that creates a list
*/
export default class Projects extends React.Component {
	static get defaultProps() {
        return {
        	pageName: '',
        	active: false
        }
    }

	render(){
		const { pageName, active } = this.props;

		let renderedProjects = [];
		ProjectList().forEach((project, idx) => {
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

		return (
			<div className={cx(`${pageName}-page`, 'projects-page', modifiers)}>
				<ul className='project-list'>
					{ renderedProjects }
				</ul>
			</div>
		);
	}
}