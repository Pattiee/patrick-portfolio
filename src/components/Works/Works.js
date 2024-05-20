import React, { useState } from 'react'
import './works.css'
import WorkImg1 from '../../assets/app-design.jpg'
import Projects from '../Projects/Projects'
import Button from 'react-bootstrap/esm/Button'

const Works = () => {

  const[projects, setProjecs] = useState([
    {
      id: 1,
      name: "Project1",
      image: "",
      link: "project-link"
    },
    {
      id: 2,
      name: "Project2",
      image: "",
      link: "project-link"
    },
    {
      id: 3,
      name: "Project3",
      image: "",
      link: "project-link"
    }
  ]);


  return (
    <section id='works'>
        <span className='worksTitle'>Portfolio</span>
        <span className='worksDesc'>I take pride in paying attention to the smallest details 
        and making sure that my work is pixel perfect. I'm excited to bring my skills 
        and experience to help businesses achieve their goals and create a strong online presence. Following are the projects that I have built over time.</span>
        <div className='worksImgs'>

            <Projects projects={projects}/>
        </div>
        <button type='button' className='btn btn-outline-secondary rounded-pill'>See more</button>
    </section>
  )
}

export default Works