import React from "react";
import "./ProjectsStyle.css";
import ProjectsList from './ProjectsList';
import { sliderData } from './../Slider/slider-data';




const Projects = () => {

  return (
    <div className="container" id="projects">
      <div className="section-title">
        <h1>Services</h1>
        <span className="line"></span>
      </div>
      <div className="row">
        
          <div>
            <ProjectsList sliderData />
          </div>
        
      </div>
    </div>
  );
};

export default Projects;
