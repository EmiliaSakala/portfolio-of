import React from 'react';
import "./about.scss";
import about from '../../img/about.png'


const About = () => {
  return (
    <div className="about">
        <div className="container">
        
          <img src={about} alt="" />

          <div className="about-text">
            <h2>About Me</h2>
            <p className="role">I'm a front-end web developer</p>
            <p className="summary">Lorem, ipsum dolor sit amet consectetur 
              adipisicing elit. Aut a enim pariatur 
              voluptatibus eaque corrupti natus in 
              saepe error cum!
              Lorem, ipsum dolor sit amet consectetur 
              adipisicing elit. Aut a enim pariatur 
              voluptatibus eaque corrupti natus in 
              saepe error cum!</p>
              <hr />

              <div className="about-details">
                <p>Name:<span> Emilia Sakala</span></p>
                <p>Email:<span className="email"> emiliasakala18@gmail.com</span></p>
                <p>From:<span> Harare, Zimbabwe</span></p>
              </div>
          </div>
          
        </div>
    </div>
  )
}

export default About