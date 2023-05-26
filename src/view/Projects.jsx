import React from 'react'
import {Row} from 'react-bootstrap';
import ProjectTitle from '../components/ProjectTitle.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
function Projects() {

	const projects = [
		{
			'no': 0,
			'background': 'danger',
			'name': 'Counter',
			'URL': '#',
			'img': 'image',
			'comment': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form'
		},
		{
			'no': 1,
			'background': 'success', 
			'name': '', 
			'URL': '', 
			'img': '' 
		},
		{
			'no': 2,
			'background': 'secondary', 
			'name': '', 
			'URL': '', 
			'img': '' 
		},
		{
			'no': 3,
			'background': 'warning', 
			'name': '', 
			'URL': '', 
			'img': '' 
		},	
	]


	return (
			<Row className="text-center text-light justify-content-start align-items-center">
				<ProjectTitle />
				<div className="col-12">
					{projects.map((e)=>(
						<div className="mt-5 mb-5 mx-auto">
						{console.log(e)}
							<ProjectCard
								key={e} 
								array={projects}
								name={projects[e['no']]['name']} 
								number={e['no']} 
								background={projects[e['no']]['background']}
								url={projects[e['no']]['URL']}
								comment={projects[e['no']]['comment']}
								img={projects[e['no']]['img']}
							/>
						</div>
					))}
				</div>
			</Row>
	)
}

export default Projects













