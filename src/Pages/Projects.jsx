import React from 'react';
import cx from 'classnames';

/* components */
// import Navigation from '../Components/Navigation';

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
				here are my projects
			</div>
		);
	}
}