import React from "react";

import "../Styles/Projects.css";

import ss1 from "../assets/ss1.jpeg";
import ss2 from "../assets/ss2.png";
import ss3 from "../assets/ss3.jpg";

import ProjecCards from "../Components/ProjectCards";

const ProjectPage = () => {


    const projects = [
        {title: "Project One", type: "Web Development", description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis tristique mi sed maximus. Duis finibus tortor lorem. Donec iaculis turpis dolor, non ornare tortor rhoncus ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis tristique mi sed maximus. Duis finibus tortor lorem. Donec iaculis turpis dolor, non ornare tortor rhoncus ac.`,
            desc2:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis tristique mi sed maximus. Duis finibus tortor lorem. Donec iaculis turpis dolor, non ornare tortor rhoncus ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis tristique mi sed maximus. Duis finibus tortor lorem. Donec iaculis turpis dolor, non ornare tortor rhoncus ac.`, img:ss1, tags: ["HTML", "CSS", "JavaScript"]},
        {title: "Project Two", type: "Mobile App", description: "This is a description of project two.", img: ss2},
        {title: "Project Three", type: "Game Development", description: "This is a description of project three.", img: ss3},

    ]




    return(

        <>
            <div className="projects-wrapper" id="projects">
                <ProjecCards projects={projects} />
            </div>
        </>

    )
}

export default ProjectPage;