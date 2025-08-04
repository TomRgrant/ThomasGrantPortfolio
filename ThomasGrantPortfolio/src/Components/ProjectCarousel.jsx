import React from "react";
import Glider from 'react-glider';
import 'glider-js/glider.min.css';

import ss1 from '../assets/ss1.jpeg';
import ss2 from '../assets/ss2.png';
import ss3 from '../assets/ss3.jpg';
import ss4 from '../assets/ss4.jpeg';

const ProjectCarousel = ({ deviceType, className }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const projects = [
    { title: "Snorkel Trails", tagLine: "Explore Scottish beaches.", img: ss1 },
    { title: "Snorkel Trails", tagLine: "Discover marine life hotspots.", img: ss2 },
    { title: "Snorkel Trails", tagLine: "Plan your coastal adventure.", img: ss3 },
    { title: "Snorkel Trails", tagLine: "Stay safe with real-time tides.", img: ss4 },
  ];

  return (
    <div className="carousel-wrapper">
      
    </div>
  );
};

export default ProjectCarousel;
