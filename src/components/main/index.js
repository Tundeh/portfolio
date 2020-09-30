import React from "react";
import About from "../about/index";
import Footer from "../footer/index";
import Skills from "../skills/index";
import ProjectList from "../projectList/index";
import "./index.scss";
import Contact from "../contact";

const Main = (props) => {

  return(
    <div className="main">
      <About/>
      <ProjectList/>
      <Skills/>
      <Contact/>
        <Footer/>
    </div>
  )
}

export default Main;