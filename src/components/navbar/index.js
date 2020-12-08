import React, { useState } from "react";
import Modal from "../modal";
import "./index.scss";

const Navbar = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  const [toggleClass, setToggleClass] = useState(0);

  //this function handles the mobile Toggle button
  const handleDrawer = () => {
    setToggleClass((x) => !x);
  };

  //this function handles modal
  const toggle = () => {
    setIsShowing(!isShowing);
    if (toggleClass) {
      handleDrawer();
    }
  };

  const goContact = () => {
    const anchor = document.querySelector("#contact");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    if (toggleClass) {
      handleDrawer();
    }
  };

  const goPro = () => {
    const anchor = document.querySelector("#pro");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    if (toggleClass) {
      handleDrawer();
    }
  };

  const goResume = () => {
    window.open(
      "https://res.cloudinary.com/team-work/image/upload/v1607444677/portfolio/resume_x51dxs.pdf"
    );
    if (toggleClass) {
      handleDrawer();
    }
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
        <a
          href="#!"
          onClick={handleDrawer}
          className={toggleClass ? "toggle-btn on" : "toggle-btn"}
        >
          <span></span>
        </a>
      </div>
      <Modal isShowing={isShowing} handleClick={toggle}></Modal>
      <div className={toggleClass ? "toolbar on" : "toolbar off"}>
        <ul>
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
    </div>
  );
};
export default Navbar;
