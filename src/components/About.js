import React, { useState } from 'react';
import aboutImage from '../assets/images/aboutme-img.jpg';

function About() {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={aboutImage} alt="Prince" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>I'm a passionate web developer with a fresh perspective, having recently completed my masters in MCA. What excites me most about web development is the blend of creativity and logic. I enjoy transforming ideas into interactive, functional websites that provide great user experiences.</p>
            
            <div className="tab-titles">
              <div 
                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} 
                onClick={() => handleTabChange('skills')}
              >
                Skills
              </div>
              <div 
                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} 
                onClick={() => handleTabChange('education')}
              >
                Education
              </div>
            </div>

            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul>
                <li>HTML - 95%</li>
                <li>CSS - 90%</li>
                <li>Bootstrap - 95%</li>
                <li>JavaScript - 85%</li>
                <li>React - 80%</li>
                <li>Tailwind CSS - 90%</li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                <li>Master of Computer Application (MCA)<br />- Himachal Pradesh Technical University [2022-2024]</li>
                <li>Bachelor of Computer Application (BCA)<br />- Himachal Pradesh University [2018-2021]</li>
                <li>Intermediate<br />- HPBOSE [2017-2018]</li>
                <li>Matriculation<br />- HPBOSE [2015-2016]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;