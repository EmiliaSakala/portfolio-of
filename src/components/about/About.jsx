import React from 'react';
import "./about.scss";
import me from '../../img/me.jpg'


const About = () => {
  return (
    <div className="about">
        <div className="container">
        
          <img src={me} alt="" />

          <div className="about-text">
            <h2>About Me</h2>
            <p>I'm a front-end web developer</p>
            <p>Lorem, ipsum dolor sit amet consectetur 
              adipisicing elit. Aut a enim pariatur 
              voluptatibus eaque corrupti natus in 
              saepe error cum!</p>
              <hr />

              <div className="about-details">
                <p><span>Name: Emilia Sakala</span></p>
                <p><span>Email: emiliasakala18@gmail.com</span></p>
                <p><span>Age: 21</span></p>
                <p><span>From: Harare, Zimbabwe</span></p>
              </div>
          </div>
          
        </div>
    </div>
  )
}

export default About