import React from 'react'
import './skills.scss'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaSass} from 'react-icons/fa'
import {FaWordpress} from 'react-icons/fa'
import {FaGitAlt} from 'react-icons/fa'
import {FaJs} from 'react-icons/fa'
import {SiAdobexd} from 'react-icons/si'
import { IconContext } from 'react-icons'


export default function Skills() {
  return (
    <div className="skills">
        <h2>Skills</h2>
        <p>These are my skills, I am constantly learning so I may update this section more often</p>
     
        <div className="container">
            <div className="card">
               <IconContext.Provider value={{color: 'orange-red'}}>
               <FaHtml5 className="icon" />
               </IconContext.Provider>
               <p>HTML</p>
            </div>
            <div className="card">
            <IconContext.Provider value={{color: 'blue'}}>
               <FaCss3  className="icon"/>
               </IconContext.Provider>
               <p>Css</p>
            </div>
            <div className="card">
               <IconContext.Provider value={{color: 'pink'}}>
               <FaSass className="icon"/>
               </IconContext.Provider>
               <p>Sass</p>
            </div>
            <div className="card">
               <FaPython className="icon"/>
               <p>Python</p>
            </div>
            <div className="card">
               <FaReact className="icon"/>
               <p>React</p>
            </div>
            <div className="card">
               <FaGitAlt className="icon"/>
               <p>Git</p>
            </div>
            <div className="card">
               <FaGithub className="icon"/>
               <p>Github</p>
            </div>
            <div className="card">
               <FaWordpress className="icon"/>
               <p>Wordpress</p>
            </div>
            <div className="card">
               <FaJs className="icon"/>
               <p>Js</p>
            </div>
            <div className="card">
               <SiAdobexd className="icon"/>
               <p>Adobe Xd</p>
            </div>
            
        </div>
    </div>
  )
}
