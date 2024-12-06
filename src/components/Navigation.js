import React from 'react';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project1.jpeg';

function Portfolio() {
  const projects = [
    {
      image: project1,
      title: 'Netflix Clone',
      description: 'This is a Full stack project included feature of Login using Firebase',
      link: 'https://netflixclone-myproject.vercel.app/login'
    },
    {
      image: project3,
      title: 'Cinema Reservation System',
      description: 'It is ticket booking website where user can book their movie tickets.',
      link: 'https://github.com/princepatial/Cinema_Resevation_System'
    },
    {
      image: project2,
      title: 'Restaurant Review Website',
      description: 'In this, user can check the menus of the different restaurants.',
      link: 'https://github.com/princepatial/Resturant_Review_Website'
    }
  ];

  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          {projects.map((project, index) => (
            <div key={index} className="work">
              <img src={project.image} alt={project.title} />
              <div className="layer">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View</a>
              </div>
            </div>
          ))}
        </div>
        <a href="https://github.com/princepatial" className="btn" target="_blank" rel="noopener noreferrer">See more</a>
      </div>
    </div>
  );
}

export default Portfolio;