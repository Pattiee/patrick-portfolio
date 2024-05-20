import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import Button from 'react-bootstrap/Button';
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.jpg'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter5.svg'
import Youtube from '../../assets/youtube.png'
import Instagram from '../../assets/instagram.jpg'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oczoxkb', 'template_p9lmuay', form.current, {
        publicKey: 'L5H8KpvFI6v9Bt2_K', 
      }).then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent.');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
      <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>Notable clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with diverse group of companies.
                Some notable companies I have worked with includes. 
            </p>
            <div className='clientImgs'>
                <img src={Walmart} alt='Client' className='clientImg'/>
                <img src={Adobe} alt='Client' className='clientImg'/>
                <img src={Microsoft} alt='Client' className='clientImg'/>
                <img src={Facebook} alt='Client' className='clientImg'/>
            </div>
        </div>

        <div className='contact' id='contact'>
            <h1 className='contactPageTitle'>Let's talk</h1>
            <span className='contctDesc'>Please fill out the form below so we can start a discussion on any project that I can do for you.</span>
            
            {/* Contact Form */}
            <form ref={form} onSubmit={sendEmail} className='contactForm'>
              <input type='text' className='name' name="your_name" required placeholder='Your name'/>
              <input type='email' className='email' name="your_email" required placeholder='Your email'/>
              <textarea className='msg' name="message" required rows={5} placeholder='Type your message here...'></textarea>
              <Button className='btn btn-primary submitBtn px-5 rounded-pill' variant="primary" type='submit'>Submit</Button>

              <div className='links'>
                <img src={Facebook} alt='Facebook' className='link'/>
                <img src={Twitter} alt='Twitter' className='link'/>
                <img src={Youtube} alt='Youtube' className='link'/>
                <img src={Instagram} alt='Instagram' className='link'/>
              </div>

            </form>
        </div>
      </section>
  )
}

export default Contact
