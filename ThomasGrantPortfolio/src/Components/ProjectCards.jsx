import React from "react";
import "../Styles/Showcase.css";

const ProjectCards = ({ projects }) => {
  const projectNodes = projects.map((project, index) => {
    const tagsNodes = project.tags?.map((tag, tagIndex) => (
      <div className="tag" key={tagIndex}>
        <p className="tag">{tag}</p>
      </div>
    ));

    return (
  <div className="card-wrapper fade-in" key={index}>
    <div className="left">
      <h1><span>{project.title}</span></h1>
      <h3>{project.type}</h3>

      <div className="tags">
        {tagsNodes}
      </div>

      <p>{project.description}</p>
      <p>{project.desc2}</p>

      <div className="project-buttons">
        <a href={project.demo} target="blank"><button>Source Code</button></a>
        <a href={project.demo} target="blank" style={{ display: project.demo ? "inline-block" : "none" }}><button>Demo</button></a>
      </div>
    </div>

    <div className="right">
      <div className="screen-frame">
        <div className="fake-browser">
          <div className="fake-window">
            <div className="traffic-lights">
              <div className="red" />
              <div className="yellow" />
              <div className="green" />
            </div>
            <div className="title">{project.title}</div>
          </div>
          <img
            className="project-img"
            src={project.img}
            alt={`${project.title} screenshot`}
          />
        </div>
      </div>
    </div>
  </div>
);

  });

  return <>{projectNodes}</>;
};

export default ProjectCards;
