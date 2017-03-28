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
        	PromiseNavigationDidPress: () => {}
        }
    }

	render(){
		const { name, active, icon, description } = this.props;

		const imgPath = require(`../images/${icon}`);

		const styles = {
			backgroundImage: `url(${imgPath})`
		}
		
		return (
			<li className={cx('project-item', active ? 'active':'')}
				style={styles}>
				
				<h3>{name}</h3>
				<p>{description}</p>
			</li>
		);
	}
}