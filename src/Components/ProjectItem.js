import React from 'react';
import cx from 'classnames';
import { CONSTANTS } from '../constants';
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
		isInvisible: false,
		isExtra: false,
		isDisplayNone: false,
		index: -1,
    	onClick: () => {},
    };

	render(){
		const { data, children, active, isInvisible, isExtra, isDisplayNone, index } = this.props;
		const { name, icon, description, linkTo, category } = data;

		const imgPath = icon && require(`../images/${icon}`);
		const styles = {
			backgroundImage: `url(${imgPath})`
		};

		const modifiers = {
			'mod-active': active,
			'mod-large': active,
			'mod-extra-item': isExtra,
			'mod-invisible-item': isInvisible,
			'mod-display-none': isDisplayNone,
			'mod-is-even': index % 2,

			'effects--projects': category === CONSTANTS.CATEGORY.PROJECTS,
			'effects--games': category === CONSTANTS.CATEGORY.GAMES,
			'effects--about': category === CONSTANTS.CATEGORY.ABOUT,
		};

		const isExternalLink = linkTo && linkTo.includes('http');
		
		return (
			<li 
				className={ cx('project-item', modifiers) }
				tabIndex={ isExtra ? -1 : index }
				onClick={ this.checkOnClick }
			>
				<div 
					className="project-item__image"
					style={styles}
				>
				</div>

				<div className={ cx('project-item__container')}>
					<div className="project-item__nav-container">
						<button className="project-item__nav mod-left" onClick={ this.handleLeftClick }></button>
						<button className="project-item__nav mod-right" onClick={ this.handleRightClick }></button>
					</div>					
					
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

	checkOnClick = () => {
		const { active } = this.props;
		if (!active) {
			this.handleOnClick();
		}
	}

	handleOnClick = () => {
		const { index, onClick } = this.props;
		onClick(index);
	}

	handleLeftClick = () => {
		const { index, onClick } = this.props;
		onClick(index - 1);
	}

	handleRightClick = () => {
		const { index, onClick } = this.props;
		onClick(index + 1);
	}
}