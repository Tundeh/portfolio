import React from "react";
import "./index.scss";
import {FaAngleRight} from "react-icons/fa"
const Project = ({img, name, details, projectLink}) => {
  return (
    <div className="project"  id="pro">
     <div className="project__img">
       <img src={img} alt={""}></img>
     </div>
     <div className="project__info">
       <h4>{name}</h4>
       <p>{details} </p>
       <div><span></span><button><FaAngleRight></FaAngleRight></button></div>
     </div>
    </div>
  )
}


export default Project;