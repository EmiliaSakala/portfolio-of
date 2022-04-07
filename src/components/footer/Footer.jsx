import React from 'react';
import './footer.css'
import {FaEnvelope} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';
import {FaMapMarker} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="infor">
                <h3>Emilia.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur
                     adipisicing elit. 
                    Ad et in odit cum, nam voluptas?</p>
            </div>
            <div className="explore">
               <h4>Explore</h4>
               <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">What I Do</a>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            </div>
            <div className="infor">
                <h4>Contact Me</h4>
                <div className="contact">
                <span><FaEnvelope /> emiliasakala18@gmail.com</span> 
                <span><FaPhoneAlt /> +263 774 199 158</span> 
                <span><FaMapMarker /> Harare, Zimbabwe</span> 
                </div>
            </div>
            
        </div>
    );
}

export default Footer;
