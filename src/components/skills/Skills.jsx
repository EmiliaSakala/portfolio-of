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
               <p>HTML</p>
            </div>
           
            <div className="card">
               <p>CSS</p>
            </div>

            <div className="card">
               <p>SASS</p>
            </div>

            <div className="card">
               <p>PYTHON</p>
            </div>
            <div className="card">
               <p>REACT</p>
            </div>

            <div className="card">
               <p>JS</p>
            </div>

            <div className="card">
               <p>GITHUB</p>
            </div>

            <div className="card">
               <p>WORDPRESS</p>
            </div>

            <div className="card">
               <p>ADOBE XD</p>
            </div>
            
        </div>
    </div>
  )
}
