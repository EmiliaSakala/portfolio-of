import React from 'react';
import "./about.scss";
import aboutme from "../../assets/aboutme.png"


const About = () => {
  return (
    <div className="about">
        <div className="container">
        
          <img src={aboutme} alt="" />

          <div className="about-text">
            <h2>About Me</h2>
            <p className="role">I'm a software developer</p>
            <p className="summary">I’m a passionate Web and Software Developer who enjoys turning ideas into functional,
               user-friendly digital solutions. I love building responsive websites, solving problems through code, and 
               continuously improving my skills in both frontend and backend development.

I work with technologies like HTML, CSS, JavaScript, React, WordPress, and MySQL, and I’m currently expanding my knowledge 
in full-stack development and the MERN stack (MongoDB, Express, React, Node.js)</p>
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