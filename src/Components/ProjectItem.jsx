import React from 'react';
import cx from 'classnames';
// import {CONSTANTS} from '../constants';

/* components */

/* styles */
import '../Styles/project-item.css';

export default class ProjectItem extends React.Component {
	static get defaultProps() {
        return {
        	active: false,
        	name: '',
        	icon: '',
        	description: '',
        	alttxt: '',
        	PromiseNavigationDidPress: () => {}
        }
    }

	render(){
		const { name, active, icon, description, alttxt } = this.props;
		
		return (
			<li className={cx('project-item', active ? 'active':'')}>
				{icon &&
					<img src={icon} alt={alttxt}/>
				}
				<h3>{name}</h3>
				<p>{description}</p>
			</li>
		);
	}
}