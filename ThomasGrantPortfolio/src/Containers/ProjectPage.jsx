import React from "react";

import "../Styles/Projects.css";

import snorkel from "../assets/mindblank.png";
import mindblank from "../assets/mindblank.png";
import pokemon from "../assets/pokemon.png";

import ProjecCards from "../Components/ProjectCards";

const ProjectPage = () => {


    const projects = [
        {
  "title": "Snorkel Trails",
  "type": "Full Stack Web App",
  "description": "Built as a two-week capstone project during CodeClan, Snorkel Trails is a full stack app developed with React and Java. It helps users discover snorkelling spots around Scotland using an interactive map, with filters for amenities, accessibility, skill level, and local sea life. I worked closely with another developer to bring the idea to life from scratch, including integrating a live, Scotland-specific weather and tide API — even reaching out directly to the provider to secure access.",
  "desc2": "This project was a great chance to put full stack skills into practice while learning how to collaborate effectively, solve real-world problems, and work under tight deadlines. I also built a sea life reference page so users could see what marine life to expect at each location, adding an extra layer of detail and usefulness to the app.",
  "img": pokemon,
  "tags": ["React", "Java", "Spring Boot", "REST APIs", "Map Integration", "Team Project"],
  "code":"",
  "demo":""
},
{
  "title": "Mind Blank",
  "type": "Team Web App",
  "description": "Mind Blank is a trivia quiz game built in one week as part of a team project with three other developers. Players can choose question categories and difficulty levels, making it a fun and flexible way to test your knowledge. My main contributions were building the interactive timer bar and implementing the category selection system, while also taking on a key role as a bug fixer throughout development.",
  "desc2": "This project was a great opportunity to work closely with a team under tight deadlines, taking ownership of specific features while supporting others wherever needed. It gave me the chance to grow my problem-solving skills and contribute to a polished final product, all while learning to adapt quickly in a fast-paced dev cycle.",
  "img": mindblank,
  "tags": ["JavaScript", "React", "Team Project", "Trivia Game", "UI Components", "Problem Solving"],
  "code":"",
  "demo":"https://www.youtube.com/watch?v=a67F0SbpY6g"
},
{
  "title": "Who's That Pokémon?",
  "type": "Solo Web App",
  "description": "This project was my very first solo build at CodeClan, created over a weekend as part of a self-directed challenge to explore APIs. I chose the PokéAPI and built a web-based game inspired by the classic 'Who's That Pokémon?' format. The app randomly selects a Pokémon and presents it to the user. Players can either take a guess or reveal the correct answer, and the app also includes a skip option to move on. It’s a simple but engaging concept that let me explore API data in a fun, interactive way.",
  "desc2": "The real value of this project was how much I learned in such a short time. It was my first time working with external APIs independently, while still getting to grips with React and the overall component-based structure. I had to figure out how to handle asynchronous data, manage user interactions, and structure my code clearly — all without leaning on a team. It boosted my confidence in debugging and problem-solving, and showed me how much I enjoy turning data into interactive user experiences.",
  "img": pokemon,
  "tags": ["React", "JavaScript", "APIs", "Solo Project", "PokéAPI", "Async Data", "Beginner Friendly"],
  "code":"",
  "demo":"https://tomrgrant.github.io/Pokemon-api-weekend-hw/"
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