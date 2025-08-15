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
    "description": "Snorkel Trails is a full-stack web application built in two weeks at CodeClan using HTML, CSS, JavaScript, React, Java, and a small Express server. It allows users to explore snorkelling locations across Scotland via an interactive Leaflet map, with filters for amenities, accessibility, skill level, and marine life. I focused on the frontend, implementing the UI features and connecting it to backend endpoints, while my partner handled most of the backend data entry. We designed the database schema together and structured the marine-life dataset for easy querying.",
    "desc2": "In addition, we integrated live tide and weather data from separate external APIs. For the tide information, we reached out directly to a Scotland-specific API to gain access and made sure it worked alongside our own backend data. This project strengthened my skills in connecting frontend and backend components, working collaboratively, and handling interactive map-based interfaces.",
    "img": snorkel,
    "tags": ["HTML", "CSS", "JavaScript", "React", "Java", "Express.js", "Leaflet.js", "REST API Integration"],
    "code": "https://github.com/TomRgrant/SnorkelTrails",
    "demo": ""
  },
  {
    "title": "Mind Blank",
    "type": "Team Web App",
    "description": "Mind Blank is a fast-paced trivia quiz game built in one week by a four-person team using HTML, CSS, Java, React, and the Open Trivia API. Players select categories and difficulty levels, and a visual timer bar shows how much time is left for each question. I focused on building the timer component and implementing the API requests that adapt to the selected category and difficulty.",
    "desc2": "Once those features were complete, I spent the remainder of the sprint debugging the codebase and supporting my teammates to ensure the game logic and UI worked smoothly. This project gave me experience in frontend development, API integration, and collaborative problem-solving under tight time constraints.",
    "img": mindblank,
    "tags": ["HTML", "CSS", "Java", "React", "Open Trivia API", "State Management", "UI/UX", "Debugging", "Team Collaboration"],
    "code": "https://github.com/TomRgrant/Mind-Blank",
    "demo": "https://www.youtube.com/watch?v=a67F0SbpY6g"
  },
  {
    "title": "Who's That Pokémon?",
    "type": "Solo Web App",
    "description": "This was a weekend solo project built using HTML, CSS, React, and the PokéAPI. The app fetches a random Pokémon and challenges the player to guess its name, comparing the text input directly against the API data, with options to skip or reveal the answer. The CSS is minimal, and the focus was on functionality rather than styling.",
    "desc2": "This project was my first experience working independently with external APIs in React. It taught me how to fetch and handle asynchronous data, manage component state, and structure a small, functional frontend project, all while keeping the gameplay simple and clear.",
    "img": pokemon,
    "tags": ["HTML", "CSS", "React", "State Management", "Frontend Development", "Solo Project"],
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