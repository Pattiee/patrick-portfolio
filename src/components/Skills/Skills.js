import React from 'react'
import './skills.css'
import Card from 'react-bootstrap/Card';
import WebDesign from '../../assets/web-design.png'
import AppDesign from '../../assets/app-design.jpg'
import UIDesign from '../../assets/ui-design.png'
import 'react-bootstrap';


import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Skills = ({skills}) => {


  return (
    <section id='skills'>
        <span className='skillTitle text-center'>What I do</span>
        <span className='skillDesc'>I am a Skilled and passionate web designer 
        with experience in creating visually appealing and user friendly websites. 
        I have a strong understanding of design and keen eye for detail. 
        I am proficient in html, css, and Javascript and design software such as Adobe, Photoshop and Illustrator.</span>
        <div className='skillBars'>
            <ul>
                    {skills?.map((skill) => (
                          <Card className="skillBar card" key={skill.id}>
                            <div className="card-header border-0">
                                <Card.Img className='' variant="left" src={''} alt={skill.title} />
                            </div>
                            <Card.Body className="card-block px-2">
                              <Card.Title><h4 className="card-title">{skill.title}</h4></Card.Title>
                              <Card.Text className="card-text">{skill.content}</Card.Text>
                            </Card.Body>
                            {/* <div className="w-100"></div> */}
                            <Card.Footer className="card-footer w-100 text-muted">Footer</Card.Footer>
                          </Card>
                      ))}
                
            </ul>
        </div>
    </section>
  )
}

export default Skills
