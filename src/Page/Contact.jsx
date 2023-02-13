import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div id='contact' style={{border:"1px solid red"}}>
      <Link to="https://github.com/9142Abhi"><button id='contact-github'>GitHub</button></Link>
      <Link to="https://www.linkedin.com/in/abhishek-kumar-467120237/"><button id='contact-linkedin'>LinkedIn</button></Link>
      <button id='contact-phone'>+919142520775</button>
      <button id='contact-email'>abhisingh24082002@gmail.com</button>



      {/* GitHub profile link : id="contact-github"
LinkedIn profile link : id="contact-linkedin"
Phone number : id="contact-phone"
Email address : id="contact-email" */}
    </div>
  )
}

export default Contact;
