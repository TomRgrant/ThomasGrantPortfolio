import React from "react";
import "../Styles/Projects.css";
import ProjectList from "../Components/ProjectList";
import ProjectCarousel from "../Components/ProjectCarousel";

import "../Styles/carousel.css";


const projects = () => {
  





    return(

        <>
        <div className="projects-wrapper" id="projects">
            <h1 className="title-wrapper"><span className="project-title">Projects</span></h1>

            <ProjectCarousel className="carousel"/>
        </div>
        
        </>

    )
}

export default projects;