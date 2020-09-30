import React, {useState} from "react";
import "./index.scss";
import Modal from "../modal/index";
const About = (props) => {

  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
      setIsShowing(!isShowing);
  }

  return (
           
   <div className="about">
     <div className="inner-content">
        <div className="intro">
            <h1>Software <br></br>Engineer<span>.</span></h1>
          <p>Hello! I'm Jamiu Tunde Suleiman a Software Engineer, skilled in designing, building and deployment of front end and backend of web applications <span  onClick={toggle}>More</span></p>
        </div>
        <figure>
            <svg width="66" height="300" viewBox="0 0 66 448" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H66V448H0V0ZM33 56C46.8071 56 58 44.8071 58 31C58 17.1929 46.8071 6 33 6C19.1929 6 8 17.1929 8 31C8 44.8071 19.1929 56 33 56ZM33 51C44.0457 51 53 42.0457 53 31C53 19.9543 44.0457 11 33 11C21.9543 11 13 19.9543 13 31C13 42.0457 21.9543 51 33 51ZM33.5 123L61 178H6L33.5 123ZM33.4999 130.333L55.4999 174.333H11.4999L33.4999 130.333ZM6 263V318H61V263H6ZM13 270V310H53V270H13ZM33.5 375L39.6741 394.002H59.6541L43.49 405.746L49.6641 424.748L33.5 413.004L17.3359 424.748L23.51 405.746L7.34595 394.002H27.3258L33.5 375ZM33 382L37.4902 395.82H52.0211L40.2654 404.361L44.7557 418.18L33 409.639L21.2443 418.18L25.7346 404.361L13.9789 395.82H28.5098L33 382Z" fill="#F3E8E8"/>
              </svg>
        </figure>
        <div className="profile_design">
        <div className="jamiu_pic"></div>
        
       </div>

     </div>
     
     <Modal isShowing={isShowing} handleClick={toggle}></Modal>
   </div>
   
  )
};
export default About;
