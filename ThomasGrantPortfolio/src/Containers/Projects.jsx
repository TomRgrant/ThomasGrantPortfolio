import React from "react";
import "../Styles/Projects.css";
import ProjectList from "../Components/ProjectList";


const projects = () => {
  





    return(

        <>
        <div className="projects-wrapper" id="projects">
            <h1 className="title-wrapper"><span className="project-title">Projects</span></h1>

            <div className="projects-card-container">
                <ProjectList />
            </div>
        </div>
        
        </>

    )
}

export default projects;