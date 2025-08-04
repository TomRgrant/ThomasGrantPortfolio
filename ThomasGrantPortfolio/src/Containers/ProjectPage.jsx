import React from "react";

import "../Styles/Projects.css";

import ss1 from "../assets/ss1.jpeg";
import ss2 from "../assets/ss2.png";
import ss3 from "../assets/ss3.jpg";

import ProjecCards from "../Components/ProjectCards";

const ProjectPage = () => {


    const projects = [
        {title: "Project One", type: "Web Development", description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis tristique mi sed maximus. Duis finibus tortor lorem. Donec iaculis turpis dolor, non ornare tortor rhoncus ac. Donec lacus odio, vestibulum eu magna eget, faucibus consectetur neque. Phasellus dapibus sollicitudin dolor, quis commodo turpis elementum sit amet. Vestibulum in lacus facilisis metus sodales scelerisque. Curabitur non ante a metus eleifend mollis. Maecenas elit elit, ullamcorper ut elit ut, hendrerit iaculis leo. Morbi lobortis diam quis elementum lobortis. Praesent non mauris vestibulum risus rutrum malesuada. Nam placerat, quam quis mollis efficitur, enim lacus volutpat mi, nec gravida ligula nisi ut ipsum.

Etiam a nunc sed lorem pellentesque feugiat. Proin mauris metus, facilisis eu ornare sed, maximus in nulla. Duis congue iaculis mauris at luctus. Fusce scelerisque eget nisi eget suscipit. Nam mattis massa mauris, non tempus est consectetur at. Integer suscipit, nisi vulputate pellentesque ultricies, lacus sem cursus metus, in sagittis quam est eu sapien. Nam mattis, ipsum non luctus porttitor, libero felis pretium justo, vel venenatis quam nunc at eros. Suspendisse faucibus auctor mattis. Cras in viverra nisi. Nunc consectetur fringilla magna in elementum. Morbi consequat faucibus quam, eu bibendum lacus vulputate ac. Pellentesque quis fringilla sem. Donec vel rutrum diam.`, img:ss1, tags: ["HTML", "CSS", "JavaScript"]},
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