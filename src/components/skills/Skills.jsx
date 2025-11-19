import React from "react";
import { FaPaintBrush, FaCode, FaMobileAlt, FaCamera, FaPencilRuler, FaLightbulb } from "react-icons/fa";
import "./skills.css";

const skills = [
  {
    icon: <FaPencilRuler />,
    title: "Wed Development",
    description: "I create fast, responsive, and visually appealing websites that deliver smooth user experiences across all devices."
  },
  {
    icon: <FaLightbulb />,
    title: "Resposnsive Design",
    description: "I ensure websites adapt beautifully to mobile, tablet, and desktop screens for a seamless browsing experience."
  },
  {
    icon: <FaCode />,
    title: "Website Maintenance",
    description: "I provide ongoing support, updates, bug fixes, and performance improvements to keep websites secure and running smoothly."
  },
  {
    icon: <FaPaintBrush />,
    title: "Digital Marketing Support",
    description: "I optimize websites for search engines, set up analytics, and integrate social channels to help businesses grow online."
  },
  
  {
    icon: <FaMobileAlt />,
    title: "Technical Support",
    description: "I help clients plan systems, choose the right technologies, and understand the best approach for their project."
  }
];

const Skills = () => {
  return (
    <section className="skills">
      <div className="header">
        <h2 className="skills-title">What <span> I Do </span></h2>
      <p>I help individuals and businesses bring their ideas to life through thoughtful design and efficient development.</p>
      </div>
      <div className="skills-grid container">
        {skills.map((skill, index) => (
          <div className="skills-card" key={index}>
            <div className="icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
