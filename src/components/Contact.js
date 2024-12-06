import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTelegramPlane, FaFacebook } from 'react-icons/fa'; // Import icons
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
              {/* Social Media Icons */}
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane size={30} />
              </a>
              <a href="https://www.instagram.com/that.patial/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.linkedin.com/in/princepatial/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/princepatial" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
              </a>
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
