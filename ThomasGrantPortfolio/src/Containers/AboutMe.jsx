import React from "react";
import "../Styles/AboutMe.css";

import pfp from "../assets/CroppedPFP.webp";
import CC from "../assets/CodeClan.webp";

const AboutMe = () => {
  return (
    <div className="about-me-wrapper" id="about">
      <h1 className="about-me-title">About Me</h1>

      <div className="about-section left-image">
        <img src={pfp} alt="Tom's Profile" className="side-img pfp-adjust" />
        <p>
          I began my developer journey at CodeClan, focusing mainly on React and front-end development.
          CodeClan strongly emphasized self-learning and collaboration, bringing together people from diverse
          backgrounds. This experience taught me how to adapt quickly and get the best results from working
          with different teams and perspectives.
        </p>
      </div>

      <div className="about-section right-image">
        <p>
          After graduating, I landed a role at a company using the Microsoft tech stack—including PowerApps,
          Power Automate, SharePoint, and Azure—technologies I hadn’t worked with before. Working closely
          with my manager, I took on the challenge of learning these tools independently through hands-on
          problem-solving and experimentation.
        </p>
        <img src={CC} alt="Coding Setup" className="side-img" />
      </div>

      <div className="about-section no-image">
        <p>
          Within a year, when my manager left, I became the sole developer on the team. Since then, I’ve
          continued to thrive as a solo developer, delivering practical solutions and constantly improving my
          skills. One of my proudest achievements was creating an in-house solution that saved the company
          around £15,000 by eliminating the need for costly third-party software.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
