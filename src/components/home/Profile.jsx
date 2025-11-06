import "./profile.css";
import React from 'react';
import Typical from 'react-typical';
import {FaGit, FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';



function Profile() {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        
                    <a href="https://www.linkedin.com/in/emiliasakala/">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/EmiliaSakala">
                        <FaGithub />
                    </a>
                    <a href="#">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {""}
                        Hello, I'm <span className="highlighted-text">Emilia</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {""}
                            <h1>
                                {""}
                                <Typical 
                                loop={Infinity}
                                steps={[
                                    "Software Developer",
                                    1000,
                                    "Web Designer",
                                    1000,
                                    "Digital Marketer",
                                    1000,
                                    "FrontEnd Dev",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                               Create.Motivate.Inspire 
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {""}
                            Reach Out {""} </button>
                            <a href="ex.pdf" download="Emilia ex.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
            </div>
            <div className="profile-picture">
            <div className="profile-picture-bg">

            </div>
            </div>
        </div>
        {/* <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#15143e" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,213.3C672,213,768,139,864,133.3C960,128,1056,192,1152,202.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
    </div>
  )
}

export default Profile