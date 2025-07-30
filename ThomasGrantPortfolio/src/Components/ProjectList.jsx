import React from "react";

import ss1 from "../assets/ss1.jpeg";
import ss2 from "../assets/ss2.png";
import ss3 from "../assets/ss3.jpg";
import ss4 from "../assets/ss4.jpeg";

import "../Styles/ProjectList.css";

const ProjectList = () => {


    // Example project data v
    
// {
//   title: '',
//   description: [],
//   img: '',
//   skills: [],
//   code: '',         
//   demo: '',
//   alt: '',
//   tagLine: ''       
// }


const skills = [

{
  title: 'Snorkel Trails',
  description: ["A location-based app for planning coastal snorkelling adventures around Scotland.", "Snorkel Trails was my two-week capstone project at CodeClan, built in a team of two. The goal was to create an app that helps users explore snorkelling locations around Scotland, complete with an interactive map, wildlife spotting info, and practical planning tools.", "I mainly focused on the front-end using React, while my teammate handled the Java back-end. Users could filter locations by name, region, amenities, and accessibility options, which I worked on. Getting accurate accessibility info and integrating it cleanly into the search system was one of the trickier challenges I had but it really mattered to us, so I was glad we could get it working well.", "We also integrated real-time weather and tide data, using a Scottish specific coastal API. We even reached out to the API creator directly, who kindly gave us a key after hearing about the project. It was a great example of problem-solving beyond just code.", "Other features included wildlife cards per beach, showing what animals you might see and where — encouraging users to explore more spots to find everything. The app was designed to feel helpful but light and fun, balancing safety with leisure."
],
   img: ss1,
  skills: ["React", "Javascript", "CSS", "HTML", "Java", "Accessibility"],
  code: 'https://github.com/TomRgrant/SnorkelTrails',
  demo: 'https://codepen.io/Thomas-Grant-the-sans/pen/RNWRgGb',
  alt:"Snorkel Trails Project Screenshot",
  tagLine: "A location-based app for planning coastal snorkelling adventures around Scotland."
},

{
  title: 'Snorkel Trails',
  description: ["A location-based app for planning coastal snorkelling adventures around Scotland.", "Snorkel Trails was my two-week capstone project at CodeClan, built in a team of two. The goal was to create an app that helps users explore snorkelling locations around Scotland, complete with an interactive map, wildlife spotting info, and practical planning tools.", "I mainly focused on the front-end using React, while my teammate handled the Java back-end. Users could filter locations by name, region, amenities, and accessibility options, which I worked on. Getting accurate accessibility info and integrating it cleanly into the search system was one of the trickier challenges I had but it really mattered to us, so I was glad we could get it working well.", "We also integrated real-time weather and tide data, using a Scottish specific coastal API. We even reached out to the API creator directly, who kindly gave us a key after hearing about the project. It was a great example of problem-solving beyond just code.", "Other features included wildlife cards per beach, showing what animals you might see and where — encouraging users to explore more spots to find everything. The app was designed to feel helpful but light and fun, balancing safety with leisure."
],
   img: ss2,
  skills: ["React", "Javascript", "CSS", "HTML", "Java", "Accessibility"],
  code: 'https://github.com/TomRgrant/SnorkelTrails',
  demo: 'https://codepen.io/Thomas-Grant-the-sans/pen/RNWRgGb',
  tagLine: "A location-based app for planning coastal snorkelling adventures around Scotland."
},

{
  title: 'Snorkel Trails',
  description: ["A location-based app for planning coastal snorkelling adventures around Scotland.", "Snorkel Trails was my two-week capstone project at CodeClan, built in a team of two. The goal was to create an app that helps users explore snorkelling locations around Scotland, complete with an interactive map, wildlife spotting info, and practical planning tools.", "I mainly focused on the front-end using React, while my teammate handled the Java back-end. Users could filter locations by name, region, amenities, and accessibility options, which I worked on. Getting accurate accessibility info and integrating it cleanly into the search system was one of the trickier challenges I had but it really mattered to us, so I was glad we could get it working well.", "We also integrated real-time weather and tide data, using a Scottish specific coastal API. We even reached out to the API creator directly, who kindly gave us a key after hearing about the project. It was a great example of problem-solving beyond just code.", "Other features included wildlife cards per beach, showing what animals you might see and where — encouraging users to explore more spots to find everything. The app was designed to feel helpful but light and fun, balancing safety with leisure."
],
   img: ss3,
  skills: ["React", "Javascript", "CSS", "HTML", "Java", "Accessibility"],
  code: 'https://github.com/TomRgrant/SnorkelTrails',
  demo: '',
  tagLine: "A location-based app for planning coastal snorkelling adventures around Scotland."
},

{
  title: 'Snorkel Trails',
  description: ["A location-based app for planning coastal snorkelling adventures around Scotland.", "Snorkel Trails was my two-week capstone project at CodeClan, built in a team of two. The goal was to create an app that helps users explore snorkelling locations around Scotland, complete with an interactive map, wildlife spotting info, and practical planning tools.", "I mainly focused on the front-end using React, while my teammate handled the Java back-end. Users could filter locations by name, region, amenities, and accessibility options, which I worked on. Getting accurate accessibility info and integrating it cleanly into the search system was one of the trickier challenges I had but it really mattered to us, so I was glad we could get it working well.", "We also integrated real-time weather and tide data, using a Scottish specific coastal API. We even reached out to the API creator directly, who kindly gave us a key after hearing about the project. It was a great example of problem-solving beyond just code.", "Other features included wildlife cards per beach, showing what animals you might see and where — encouraging users to explore more spots to find everything. The app was designed to feel helpful but light and fun, balancing safety with leisure."
],
   img: ss4,
  skills: ["React", "Javascript", "CSS", "HTML", "Java", "Accessibility"],
  code: 'https://github.com/TomRgrant/SnorkelTrails',
  demo: '',
  tagLine: "A location-based app for planning coastal snorkelling adventures around Scotland."
}


]

 

const skillNodes = skills.map((skill, index) => {

    const desc = skill.description.map((line) => {
        
        return (
            <>
        <p key={line}>{line} </p>
        <br/>
        </>
    );
    })

    return (
        <div className="card" key={index}>
            <img alt={skill.alt} src={skill.img} />
            <div className="info-wrap">
            <h2 className="card-title">{skill.title}</h2>
            <div className="desc">
                <h3>{skill.tagLine}</h3>
            </div>
            
            <div className="skills">
                {skill.skills.map((s, i) => (
                    <p key={i}>{s}</p>
                ))}
            </div>
            <div className="links">
                {skill.code && <a href={skill.code} target="_blank" rel="noopener noreferrer">Source Code</a>}
                {skill.demo && <a href={skill.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
            </div>
        </div>
    )
}

)



    return (

        <>
        {skillNodes}
        </>

        )
}

export default ProjectList;