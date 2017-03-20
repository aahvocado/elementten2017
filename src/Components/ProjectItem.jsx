import React from 'react';
import cx from 'classnames';
import {CONSTANTS} from '../constants';

/* components */

/* styles */
import '../Styles/project-item.css';

export default class ProjectItem extends React.Component {
	static get defaultProps() {
        return {
        	active: false,
        	img: '',
        	description: '',
        	alttxt: '',
        	PromiseNavigationDidPress: () => {}
        }
    }

	render(){
		const { active, img, description, alttxt } = this.props;
		
		return (
			<li className={cx('project-item', active ? 'active':'')}>
				{img &&
					<img src={img} alt={alttxt}/>
				}
				<p>{description}</p>
			</li>
		);
	}
}