import React from "react";
import "./index.scss";

const Modal = ({ isShowing, handleClick }) => {
  return isShowing ? (
    <div className="modal">
      <div className="modal-overlay" onClick={handleClick}></div>
      <div className="modal-wrapper">
        <div className="header">
          <h1>Bio</h1>
          <span className="modal__button" onClick={handleClick}>
            <span></span>
          </span>
        </div>

        <div className="modal-content">
          <div className="modal-intro">
            <h2>
              Hi, i'm Jamiu{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
            </h2>
            <p>
              I'm a full-stack developer based in Nigeria. I currently
              specialize in using react, node.js and express.js as my primary
              technology for building frontend and backend of web apps but can
              hit the ground running if other technologies are needed to get the
              job done.
            </p>

            <p>
              I'm equipped with the necessary tools to carry out backend or
              frontend project.
            </p>
            <p>
              Also, I possess a bachelors degree in computer engineering with
              strong understanding of OOP, computer archtitecture and embeded
              systems. Skilled in using MATLAB, Proteus and C language to
              carryout embeded systems designs.
            </p>

            <p>
              I am very passionate about my job and am always excited when
              chalenged with new problems because it engenders creativity and
              innovation in me.
            </p>
            <p>
              You can reach me via mobile on +2348173976749 or via email:{" "}
              <br></br>
              <a href="mailto:jamiu.suleiman111@gmail.com">
                jamiu.suleiman111@gmail.com
              </a>
            </p>
          </div>
          <div className="image-wrapper">
            <div className="modal-image"></div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
