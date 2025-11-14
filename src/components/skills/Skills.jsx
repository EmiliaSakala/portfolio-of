import React from "react";
import { FaPaintBrush, FaCode, FaMobileAlt, FaCamera, FaPencilRuler, FaLightbulb } from "react-icons/fa";
import "./skills.css";

const skills = [
  {
    icon: <FaPencilRuler />,
    title: "UX/UI Design",
    description: "I am a website designer from Louisiana strong web developer. I love to get new experience and learn from my designer."
  },
  {
    icon: <FaLightbulb />,
    title: "Creative Design",
    description: "I am a website designer from Louisiana strong web developer. I love to get new experience and learn from my designer."
  },
  {
    icon: <FaCode />,
    title: "Web Design",
    description: "I am a website designer from Louisiana strong web developer. I love to get new experience and learn from my designer."
  },
  {
    icon: <FaPaintBrush />,
    title: "Branding",
    description: "I am a website designer from Louisiana strong web developer. I love to get new experience and learn from my designer."
  },
  
  {
    icon: <FaMobileAlt />,
    title: "Mobile App",
    description: "I am a website designer from Louisiana strong web developer. I love to get new experience and learn from my designer."
  }
];

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills-title">What I Do</h2>
      <div className="skills-grid">
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
