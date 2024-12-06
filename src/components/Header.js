import React, { useEffect } from 'react';
import Typed from 'typed.js';

function Header() {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: ["Programmer", "Web Developer", "Front End Developer"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <div id="header">
      <div className="container">
        <div className="header-text">
          <p>Welcome to my Portfolio</p>
          <h1>Hi, I'm Prince <span className="auto-type"></span></h1>
        </div>
      </div>
    </div>
  );
}

export default Header;