import React from 'react'
import { Card, Button } from 'react-bootstrap';
function ProjectCard(props) {
	return (
		<div className="text-center">
  <Card bg={props.background} className="w-auto d-inline-block">
    <Card.Img variant="top" src={props.url} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>{props.comment}</Card.Text>
      <Button variant="info">Tıkla</Button>
    </Card.Body>
  </Card>
</div>


	)
}

export default ProjectCard