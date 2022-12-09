import React,{ useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_62rrv2k', 'template_uvp7u1d', form.current, 'A0S2K8tojwrFaYmft')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='join' id='join-us'>
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>READY TO</span>
          <span>LEVEL UP</span>
        </div>

        <div>
          <span className='stroke-text'>YOUR BODY</span>
          <span>WITH US?</span>
        </div>

      </div>

      <div className="right-j">
        <form ref={form} onSubmit={sendEmail} className="email-container">
          <input type="email" name="user_email"placeholder='Enter Your Email' />
          <button className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
