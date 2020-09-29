import React from "react";
import "./index.scss";

const Navbar = (props) => {
  const goContact = () => {
    const anchor = document.querySelector('#contact')
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
}


const goPro = () => {
  const anchor = document.querySelector('#pro')
  anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
  return (
    <div className="navbar">
    
    <div className="navbar-wrapper">
    <div className="navbar-logo">Tundeh</div>
      <ul className="navbar-links">
        <li>
          <span>About</span>
        </li>
        <li>
          <span onClick={goPro}>Projects</span>
        </li>
        <li>
          <span onClick={goContact}>Contact</span>
        </li>
      </ul>
    </div>
    </div>
  );
};
export default Navbar;
