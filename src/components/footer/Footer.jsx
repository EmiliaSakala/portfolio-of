import React from 'react';
import './footer.css'
import {FaEnvelope} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';
import {FaMapMarker} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-inner">
            <div className="infor">
                <h3>Emilia.</h3>
                <p>I’m a passionate web developer who enjoys creating clean, user-friendly websites and solving real-world problems through technology. I love learning new tools, building 
                    meaningful digital experiences, and helping brands grow online.</p>

                   <div className="icons">
                     <a href="https://www.linkedin.com/in/emiliasakala/"><span><FaLinkedin /></span></a>
                    <a href="https://github.com/EmiliaSakala"><span><FaGithub /></span></a>
                   </div>
                    </div>
            <div className="explore">
               <h4>Explore</h4>
               <ul>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">What I Do</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            </div>
            <div className="infor">
                <h4>Contact Me</h4>
                <div className="contact">
                <span><FaEnvelope /> emiliasakala18@gmail.com</span> 
                <span><FaPhoneAlt /> +263 774 199 158 | +263 717 986 510</span> 
                <span><FaMapMarker /> Harare, Zimbabwe</span> 
                </div>
            </div>
            </div>

            <div className="copyright">
                <p>© 2025 <span>Royal Priesthood</span> . All rights reserved.</p>
            </div>
        </div>
  
   
    );
}

export default Footer;
