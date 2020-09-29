import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaCopyright } from "react-icons/fa";
import "./index.scss";
const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-links">
      <a href="https://github.com/Tundeh">
<FaGithub />
</a>
<a href="https://twitter.com/jermiu_suleiman">
<FaTwitter></FaTwitter>
</a>
<a href="https://www.linkedin.com/in/jamiu-tunde-suleiman-0b879411a/">
<FaLinkedin></FaLinkedin>
</a>

      </div>
      <div className="copy">
        <FaCopyright /> Tundeh @ 2020
      </div>
    </div>
  );
};

export default Footer;
