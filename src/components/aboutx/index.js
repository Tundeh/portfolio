import React, { useState } from "react";
import "./index.scss";
import profile from "../../assets/img/my.jpg";
import Modal from "../modal/index";

const About = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="intro">
          <div className="animation_area">
            <div className="intro-text">
              <h1>
                Software <br></br>Engineer<span>.</span>
              </h1>
              <p>
                Hello{" "}
                <span aria-label="hi" role="img">
                  👋
                </span>
                , I'm Jamiu Tunde Suleiman a Software Engineer, skilled in
                designing, building and deployment of front end and backend
                applications <span onClick={toggle}>More</span>
              </p>
            </div>
            <ul className="box-area">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="profile">
          <div className="profile__pic">
            <div className="profile_anime">
              <div className="img_wrapper">
                <img src={profile} alt="profile pic"></img>
              </div>
              <ul className="anime-area">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Modal isShowing={isShowing} handleClick={toggle}></Modal>
    </div>
  );
};
export default About;
