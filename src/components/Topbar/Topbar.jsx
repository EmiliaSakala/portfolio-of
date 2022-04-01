import React from 'react';
import './topbar.scss';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
            <div className="left">
                <a href="#" className="logo">Emilia.</a>
                <div className="itemContainer">
                   <span><FaLinkedin /> LinkedIn</span> 
                </div>
                <div className="itemContainer">
                   <span><FaTwitter /> Twitter</span> 
                </div>
                <div className="itemContainer">
                   <span><FaEnvelope /> emiliasakala18@gmail.com</span> 
                </div>
                </div>

            <div className="right">
              <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                  <span className='line1'></span>
                  <span className='line2'></span>
                  <span className='line3'></span>
                  </div>
            </div>
            </div>
        </div>
    );
}

export default Topbar;

