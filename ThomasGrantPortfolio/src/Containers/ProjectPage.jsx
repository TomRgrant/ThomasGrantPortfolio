import React from "react";

import "../Styles/Projects.css";

import snorkel from "../assets/snorkel_trails.webp";
import mindblank from "../assets/mindblank.webp";
import pokemon from "../assets/pokemon.webp";

import ProjecCards from "../Components/ProjectCards";

const ProjectPage = () => {


    const projects = [
        {
  "title": "Snorkel Trails",
  "type": "Full Stack Web App",
  "description": "Snorkel Trails is a full stack web app built over two weeks as a CodeClan capstone project, using React and Java. It helps users discover snorkelling locations across Scotland via an interactive map with filters for amenities, accessibility, skill level, and marine life. I worked closely with another developer to bring the idea to life from the ground up, including securing access to a live, Scotland-specific tide and weather API by directly contacting the provider.",
  "desc2": "This project was a great opportunity to apply full stack development skills in a real-world setting. I gained hands-on experience in collaborative planning, solving API integration challenges, and working to tight deadlines. We also created a detailed marine life reference page so users could see what species to expect at each site, adding useful and engaging context to the app.",
  "img": snorkel,
  "tags": ["React", "Java", "REST API Integration", "Interactive Map", "Collaborative Development", "Accessibility"],
  "code": "https://github.com/TomRgrant/SnorkelTrails",
  "demo": ""
},
{
  "title": "Mind Blank",
  "type": "Team Web App",
  "description": "Mind Blank is a fast-paced trivia quiz game built in one week as part of a team project with three other developers. Players can select categories and difficulty levels, making it a customisable and engaging experience. I focused on building the interactive timer bar and the category selection system. I also took on a key role in debugging and supporting team members across the codebase.",
  "desc2": "This project was a valuable chance to collaborate under pressure, take ownership of key features, and adapt quickly during a rapid development sprint. I strengthened my problem-solving skills and contributed to a polished, playable final product while working closely with a team to manage scope, fix bugs, and maintain momentum.",
  "img": mindblank,
  "tags": ["React", "JavaScript", "Team Collaboration", "Game Logic", "UI/UX", "Component Design", "Debugging"],
  "code": "https://github.com/TomRgrant/Mind-Blank",
  "demo": "https://www.youtube.com/watch?v=a67F0SbpY6g"
},
{
  "title": "Who's That Pokémon?",
  "type": "Solo Web App",
  "description": "Built over a weekend as my first solo project at CodeClan, this app is a web-based take on the classic 'Who's That Pokémon?' game. It uses the PokéAPI to randomly select a Pokémon and challenges the user to guess its identity. Players can reveal the answer, skip to a new Pokémon, or try again. It’s a simple, interactive project designed to explore external APIs and build confidence when working with live data.",
  "desc2": "This was my first experience working independently with APIs and handling asynchronous data in React. I learned how to structure a component-based app, manage state, and respond to user input, all within a short solo sprint. It helped solidify my understanding of frontend logic and debugging, and showed me how to create smooth, interactive user experiences using real-world data.",
  "img": pokemon,
  "tags": ["React", "JavaScript", "External APIs", "Async Data Handling", "Solo Project", "Frontend Development", "PokéAPI"],
  "code": "https://github.com/TomRgrant/Pokemon-api-weekend-hw",
  "demo": "https://tomrgrant.github.io/Pokemon-api-weekend-hw/"
}







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