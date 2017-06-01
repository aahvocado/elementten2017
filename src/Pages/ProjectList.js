import React from 'react';
import cx from 'classnames';

/* components */
import ProjectItem from '../Components/ProjectItem';

/* styles */
import '../Styles/project-list.css';

/*
	ProjectList
	generic page that creates a list
*/
export default class ProjectList extends React.Component {
	static defaultProps = {
		data: [],
    };

    state = {
    	selectedIdx: undefined,
    }

	render(){
		const { data } = this.props;
		const { selectedIdx } = this.state;

		let renderedProjects = [];
		data.forEach((project, idx) => {
			const shouldRenderBefore = selectedIdx && selectedIdx % 2;

			if (selectedIdx === idx && shouldRenderBefore) { // selected even column
				renderedProjects.push(
					<ProjectItem 
						key={ `pseudo-item-${idx}-key` }
						index={ -1 }
					/>
				);
			}

			renderedProjects.push(
				<ProjectItem 
					key={ `project-item-${idx}-key` }
					onClick={ this.handleItemOnClick }
					index={ idx }
					active={ selectedIdx === idx }
					data={ project }
				/>
			);

			/*if (selectedIdx === idx && !shouldRenderBefore) { // selected odd column
				renderedProjects.push(
					<ProjectItem 
						key={ `pseudo-item-${idx}-key` }
						index={ -1 }
					/>
				);
			}*/
		});		

		return (
			<div className={ cx('et-list-container') }>
				<ul className='et-project-list'>
					{ renderedProjects }
				</ul>
			</div>
		);
	}

	handleItemOnClick = (idx) => {
		const { selectedIdx } = this.state;
		this.setState({ selectedIdx: selectedIdx === idx ? -1 : idx });
	}
}