import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './projects.css'


import RImg from '../../assets/react.svg';

function Projects({projects}) {
    return (
      <div>
        <ul>
            {projects?.map((project) => (
                  <Card className="card flex-row bg-light" key={project.id}>
                    <div className="card-header border-0">
                        <Card.Img className='' variant="left" src="" alt={project.name} />
                    </div>
                    <Card.Body className="card-block px-2">
                      <Card.Title><h4 className="card-title">{project.name}</h4></Card.Title>
                      <Card.Text className="card-text">{project.link}</Card.Text>
                    </Card.Body>
                    {/* <div className="w-100"></div> */}
                    {/* <Card.Footer className="card-footer w-100 text-muted">Footer</Card.Footer> */}
                  </Card>
              ))}
          </ul>
      </div>
    );
  }

  export default Projects;