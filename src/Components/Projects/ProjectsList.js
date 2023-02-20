import React from 'react'
import {FcExpand, FcCollapse} from "react-icons/fc"
import Slider from './../Slider/Slider';
import Zoom from 'react-reveal/Zoom';


const ProjectsList = ({name, des, image}) => {
  return (
    <Zoom>
    <div className="project-list">
    <Slider />
    </div>
    </Zoom>
  )
}

export default ProjectsList