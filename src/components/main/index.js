import React from "react";
import About from "../about/index";
import Footer from "../footer/index";
import Skills from "../skills/index";
import SlideShow from "../slideShow";
import ProjectList from "../projectList/index";
import "./index.scss";
import Contact from "../contact";

const Main = (props) => {

  return(
    <div className="main">
      <About/>
      <ProjectList/>
        <Footer/>
    </div>
  )
}

export default Main;