import React from 'react';
import './topbar.scss';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';


export default function Topbar({menuOpen, setMenuOpen}){
    return (
                <div className={"topbar " + (menuOpen && "active")}>
                    <div className="wrapper">
                     <div className="left">
                        <a href="#" className="logo">Emilia.</a>
                        <div className="itemContainer">
                            <a href="https://www.linkedin.com/in/emiliasakala/">
                           <span><FaLinkedin /> LinkedIn</span> 
                           </a>
                        </div>
                        <div className="itemContainer">
                            <a href="https://github.com/EmiliaSakala">
                           <span><FaGithub /> Github</span> 
                           </a>
                        </div>
                        <div className="itemContainer">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=emiliasakala18@gmail.com" target='_blank'>
                           <span><FaEnvelope /> emiliasakala18@gmail.com</span> 
                           </a>
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

