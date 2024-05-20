import React from 'react';
import './Intro.css'
import bg from '../../assets/Patrick.jpg'
import { Link } from "react-scroll"
import HireMeImg from '../../assets/twitter.png'
import DownloadImg from '../../assets/download-icon.svg'

import Button from 'react-bootstrap/esm/Button';

const Intro = () => {
  return (
    <div>
      <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText text-capitalize'>I'm <span className='introName text-primary'>Patrick</span> <br/> Website designer</span>
            <p className="introPara font-weight-light">I'm a skilled web designer with experience in creating <br/> visually and user friendly websites. </p>
            
            <div className="button-container float-start mt-2">
              <Button className='btn btn-primary btn-lg btn-md btn-sm px-3 mx-3 mt-0 text-capitalize rounded-pill' role='button'><img src={HireMeImg} alt='Hire Me' className='btnImg inline mx-1 px-1' width={25}/>Hire Me</Button>
              <Button className='btn btn-primary btn-lg btn-md btn-sm px-3 mx-3 mt-0 text-capitalize rounded-pill' role='button'><img src={DownloadImg} alt='cv' className='btnImg mx-1 px-1'/>Download CV</Button>
            </div>
        </div>

        <img src={bg} alt='Patrick' className='bg'/>
      </section>
    </div>
  )
}

export default Intro
