import React from 'react';
import cx from 'classnames';
// import {CONSTANTS} from '../constants';
import { Link } from 'react-router-dom';

/* components */

/* styles */
import '../Styles/project-item.css';

export default class ProjectItem extends React.Component {
	static defaultProps = {
		data: {
	    	name: '',
	    	icon: '',
	    	description: '',
	    	linkTo: undefined,
		},
		active: false,
		invisible: false,
		index: -1,
    	onClick: () => {},
    };

	render(){
		const { data, children, active, index, invisible } = this.props;
		const { name, icon, description, linkTo } = data;

		const imgPath = icon && require(`../images/${icon}`);
		const styles = {
			backgroundImage: `url(${imgPath})`
		};

		const modifiers = {
			'mod-active': active,
			'mod-large': active,
			'mod-psuedo-item': index === -1,
			'mod-invisible-item': invisible,
		};

		const isExternalLink = linkTo && linkTo.includes('http');
		
		return (
			<li 
				className={cx('project-item', modifiers)}
				onClick={ this.handleOnClick }
			>
				<div 
					className="project-item__image"
					style={styles}
				>
				</div>

				<div className="project-item__container">
					<h3 className="project-item__name">{ name }</h3>
					<p className="project-item__description">{ description }</p>

					<div className="project-item__extra">
						{ children }

						{ !isExternalLink && linkTo && 
							<Link
								className="project-item__link"
								to={ linkTo }
							>
								View Project
							</Link>
						}
						{ isExternalLink && linkTo && 
							<a
								className="project-item__link"
								href={ linkTo }
								target="_blank"
							>
								View Project
							</a>
						}
					</div>
				</div>
			</li>
		);
	}

	handleOnClick = () => {
		const { index, onClick } = this.props;
		onClick(index);
	}
}