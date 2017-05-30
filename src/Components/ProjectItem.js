import React from 'react';
import cx from 'classnames';
// import {CONSTANTS} from '../constants';
import { Link } from 'react-router-dom';

/* components */

/* styles */
import '../Styles/project-item.css';

export default class ProjectItem extends React.Component {
	static defaultProps = {
    	name: '',
    	icon: '',
    	description: '',
    	linkTo: undefined,
    	onClick: () => {},
    };

    state = {
    	active: false,
    }

	render(){
		const { name, icon, description, linkTo, children } = this.props;
		const { active } = this.state;

		const imgPath = require(`../images/${icon}`);
		const styles = {
			backgroundImage: `url(${imgPath})`
		};

		const modifiers = {
			'mod-active': active,
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
		const { active } = this.state;
		this.setState({ active: !active })
	}
}