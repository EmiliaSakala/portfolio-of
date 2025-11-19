import React from "react";
import "./portfolio.scss";
import debutCapital from "../../assets/debutCapital.png"
import standard from "../../assets/standart freight.png"
import supreme from "../../assets/supreme pest.png"
import foodweb from "../../assets/foodweb.png"


const projects = [
  {
    title: "Debut Capital",
    tags: ["UI/UX Design", "HTML", "CSS", "JavaScript"],
    image: debutCapital,
    link: "https://emiliasakala.github.io/Debut/"
  },
  {
    title: "Standard Freight Solutions Website Design",
    tags: ["UI/UX Design", "HTML", "CSS", "JavaScript"],
    image: standard,
    link: "https://emiliasakala.github.io/standard-freight-solutions/"
  },

  {
    title: "Pest Control Service Website Design",
    tags: ["UI/UX Design", "React JS", "SASS", "HTML"],
    image: supreme,
    link: "https://emiliasakala.github.io/Supreme-pest-solutions/",
  },
  {
    title: "Food Delivery App UI/UX Design",
    tags: ["HTML", "CSS", "JavaScript"],
    image: foodweb,
    link: "https://emiliasakala.github.io/food-app/"
  }
];

function Portfolio() {
  return (
    <section className="featured-section">
      <h2 className="featured-title">Featured <span> Works</span></h2>

      <div className="featured-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={project.image} className="project-img" alt={project.title} />
            <div className="overlay"></div>

            <div className="project-info">
              <h3>{project.title}</h3>

              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </a>
        ))}
      </div>
    </section>
  );
}


export default Portfolio;
