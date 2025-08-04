import React from "react";

import "../Styles/Showcase.css";

const ProjectCards = ({ projects }) => {
    const projectNodes = projects.map((project, index) => {

        
        const tagsNodes = project.tags?.map((tag, tagIndex) => (
            <div className="tag" key={tagIndex}>
                {tag}
            </div>
        ));

        return (
            <div className="card-wrapper" key={index}>
                <div className="left">
                    <h1><span>{project.title}</span></h1>
                    <h3>{project.type}</h3>

                    <div className="tags">
                        {tagsNodes}
                    </div>

                    <p>{project.description}</p>

                    <div className="project-buttons">
                        <button>View More</button>
                    </div>
                </div>

                <div className="right">
                    <div className="fake-window">
                        <div className="red" />
                        <div className="green" />
                        <div className="yellow" />
                    </div>
                    <img className="project-img" src={project.img} alt={`${project.title} screenshot`} />
                </div>
            </div>
        );
    });

    return (
        <>
            {projectNodes}
        </>
    );
};

export default ProjectCards;
