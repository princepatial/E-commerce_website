import React, { useState } from 'react';
import resumePDF from '../assets/images/PrinceResume.pdf';

function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    setMessage('Form submitted successfully!');
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>princepatial20@gmail.com</p>
            <p>(+91) 8580524080</p>
            <div className="social-icons">
              <a href="https://x.com/that_patial?t=wtggDVydurYhr0m2HajiUw&s=09" target="_blank" rel="noopener noreferrer">X</a>
              <a href="https://www.instagram.com/that.patial/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/in/princepatial/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/princepatial" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <a href={resumePDF} download className="btn btn2">Download CV</a>
          </div>
          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
            <span id="msg">{message}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;