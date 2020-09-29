import React from "react";
import Slider from "react-slick";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nodejs from "../../assets/img/nodejs.svg";
import sass from "../../assets/img/sass-1.svg";
import react from "../../assets/img/react.svg";
import redux from "../../assets/img/redux.svg";
import postgres from "../../assets/img/postgresql.svg";
import mongodb from "../../assets/img/mongodb.svg";
import css from "../../assets/img/css-3.svg";
import git from "../../assets/img/git.svg";

class Skills extends React.Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      adaptiveHeight: false,
      centerMode: false,
    };
    return (
      <div className="skills">
        <h1>Skills</h1>
        <div className="skills__slider">
          <Slider {...settings}>
          <div className="skill_name">
              <img src={nodejs} alt="node.js" />
            </div>

            <div className="skill_name">
              <img src={sass} alt="sass" />
            </div>

            <div className="skill_name">
              <img src={mongodb} alt="mongodb" />
            </div>

            <div className="skill_name">
              <img src={react} alt="react" />
            </div>

            <div className="skill_name">
              <img src={postgres} alt="postgresql" />
            </div>

            <div className="skill_name">
              <img src={css} alt="css" />
            </div>

            <div className="skill_name">
              <img src={redux} alt="redux" />
            </div>

            <div className="skill_name">
              <img src={git} alt="git" />
            </div>
          </Slider>
        </div>

        <div className="technologies">
          <div className="technologies__core">
            
            <ul>
            <h2>Core Technologies</h2>
              <li>Javascript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Mongodb</li>
              <li>Postgresql</li>
            </ul>
          </div>
          <div className="technologies__other">
            
            <ul>
            <h2>Others</h2>
              <li>Typescript</li>
              <li>Next.js</li>
              <li>Python</li>
              <li>Sass</li>
              <li>Embeded Systems</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
