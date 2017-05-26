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
		};

		const modifiers = {
			'active': active,
		};
		
		return (
			<li className={cx('project-item', modifiers)}>
				<div 
					className="project-item__image"
					style={styles}
				>
				</div>

				<div className="project-item__info">
					<h3 className="project-item__info__name">{ name }</h3>
					<p className="project-item__info__description">{ description }</p>
				</div>
			</li>
		);
	}
}