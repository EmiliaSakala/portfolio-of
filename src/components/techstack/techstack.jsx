import React from "react";
import "./techstack.scss";
import { FaHtml5, FaWordpress, FaFigma, FaCss3,FaSass, FaPython, FaNodeJs,FaGithub, } from "react-icons/fa";
import { SiSketch, SiAdobeaftereffects, SiReact, SiJavascript, SiMongodb, SiAdobexd} from "react-icons/si";

const skillsData = [
  { name: "HTML 5", icon: <FaHtml5 />, percent: 90 },
  {name: "CSS 3", icon: <FaCss3 />, percent: 88 },
  { name: "SASS", icon: <FaSass />, percent: 85 },
  {name: "JavaScript", icon: <SiJavascript />, percent: 80 },
  { name: "React JS", icon: <SiReact />, percent: 95 },
  { name: "WordPress", icon: <FaWordpress />, percent: 99 },
  { name: "Python", icon: <FaPython />, percent: 75 },
  { name: "Node JS", icon: <FaNodeJs />, percent: 70 },
  { name: "MongoDB", icon: <SiMongodb />, percent: 65 },
  { name: "Github", icon: <FaGithub />, percent: 97 },
  { name: "Adobe Xd", icon: <SiAdobexd />, percent: 99 },
  
];

const Techstack = () => {
  return (
    <section className="skills-section">
      <div className="skills-header">
        <h2>
          My <span>Technology Stack</span>
        </h2>
        <p>
          A blend of creativity and code — these are the tools that power my work and help me turn ideas into engaging digital experiences.
        </p>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{skill.icon}</div>
            <h3>{skill.name}</h3>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
            <span className="percent-label">{skill.percent}%</span>
          </div>
        ))}
      </div>
    
    </section>
  );
};

export default Techstack;
