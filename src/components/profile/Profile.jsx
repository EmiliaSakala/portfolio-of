import "./profile.css";
import React from 'react';
import Typical from 'react-typical';


function Profile() {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        
                    <a href="#">
                        <i className="fa fa-facebook-square"></i>
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
                                    "Web Developer",
                                    1000,
                                    "Web Designer",
                                    1000,
                                    "Writter",
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
                            Hire Me {""} </button>
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
    </div>
  )
}

export default Profile