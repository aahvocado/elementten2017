import React from 'react';
import cx from 'classnames';
import ProjectList from '../ProjectList';

/* components */
import ProjectItem from '../Components/ProjectItem';

/* styles */
import '../Styles/project-list.css';

/*
	Projects
*/
export default class Projects extends React.Component {
	static get defaultProps() {
        return {
        	active: false
        }
    }

	render(){
		const { active } = this.props;

		let renderedProjects = ProjectList().map((project, idx) => {
			return (
				<ProjectItem key={'project-item-'+idx+'-key'}
					{...project}/>
			);
		});

		return (
			<div className={cx('projects-page', (active ? 'active':'inactive'))}>
				<h2>Projects</h2>
				<ul className='project-list'>
					{ renderedProjects }
				</ul>
			</div>
		);
	}
}