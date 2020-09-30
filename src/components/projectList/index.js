import React from "react";
import Project from "../project/index";
import poldat from "../../assets/img/poldat.png";
import vitaNova from "../../assets/img/vitanova.png";
import portfolio from "../../assets/img/portfolio.png";

import "./index.scss";

const ProjectList = (props) => {

 return (
 <div className="projects">
   <div className="projects__header"><h1>Projects</h1></div>
   <div className="projects__grid">
     <Project img={poldat} name={"Poldat"} details="poldat is an application used in managing political members data." projectLink={""}/>
     <Project img={portfolio} name={"Portfolio"} details="This my personal portfolio project."/>
     <Project img={vitaNova} name={"Vita Nova"} details="Vita Nova is a platform that connect farmers to commercial consumers."/>
   </div>
 </div>
 )
}

export default ProjectList;