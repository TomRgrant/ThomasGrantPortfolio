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
    I began my developer journey at CodeClan, where I focused on React and front-end development.
    The bootcamp emphasised self-directed learning and close team collaboration, exposing me to diverse perspectives
    and fast-paced problem-solving. It taught me how to adapt quickly and deliver results in a team setting.
  </p>
</div>

<div className="about-section right-image">
  <p>
    After graduating, I joined a company using the Microsoft tech stack including PowerApps, Power Automate,
    SharePoint, and Azure, none of which I had worked with before. With some support from my manager, I quickly picked up
    these tools through hands-on problem-solving and self-driven experimentation.
  </p>
  <img src={CC} alt="Coding Setup" className="side-img" />
</div>

<div className="about-section no-image">
  <p>
    Within a year, my manager left, and I stepped up as the sole developer on the team. Since then, I’ve thrived in
    the role, independently delivering practical solutions and constantly developing my skills. One highlight was
    building an in-house tool that saved the company around £15,000 by replacing the need for costly third-party
    software.
  </p>
  <p>
    I’m now looking for opportunities where I can continue building meaningful tools, grow as a developer,
    and contribute to a collaborative team.
  </p>
      </div>
    </div>
  );
};

export default AboutMe;
