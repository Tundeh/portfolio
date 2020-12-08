import React, { useState } from "react";
import Modal from "../modal";
import "./index.scss";

const Navbar = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  const goContact = () => {
    const anchor = document.querySelector("#contact");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const goPro = () => {
    const anchor = document.querySelector("#pro");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const goResume = () => {
    window.open(
      "https://res.cloudinary.com/team-work/image/upload/v1607444677/portfolio/resume_x51dxs.pdf"
    );
  };
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-logo">Tundeh</div>
        <ul className="navbar-links">
          <li>
            <span onClick={toggle}>About</span>
          </li>
          <li>
            <span onClick={goPro}>Projects</span>
          </li>
          <li>
            <span onClick={goContact}>Contact</span>
          </li>
          <li>
            <span onClick={goResume}>Resume</span>
          </li>
        </ul>
      </div>
      <Modal isShowing={isShowing} handleClick={toggle}></Modal>
    </div>
  );
};
export default Navbar;
