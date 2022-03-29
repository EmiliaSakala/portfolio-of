import React from 'react';
import Project from '../project/Project';
import "./projects.css";
import { projects } from '../../data';


const Projects = () => {
  return (
    <div className="projects">
       <div className="text">
        <h1 className="tittle">Create, Motivate and Inspire. It's Emilia</h1>
        <p className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat, 
            inventore ipsa placeat quos ullam odio natus harum soluta incidunt.
            </p>
    </div>
    <div className="list">
      {projects.map((item) => (
        <Project />
      ))}
        
        
    </div>
    </div>
  )
}

export default Projects