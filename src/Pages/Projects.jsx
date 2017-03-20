import React from 'react';
import cx from 'classnames';

/* components */
import ProjectItem from '../Components/ProjectItem';

/* styles */
// import '../Styles/styles.css';

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

		return (
			<div className={cx('projects-page', (active ? 'active':'inactive'))}>
				<h2>Projects</h2>
				<ul className='project-list'>
					<ProjectItem />
				</ul>
			</div>
		);
	}
}