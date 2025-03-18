import React from "react";
import './Footer.css'

function Footer(){
    return(
        <>
  <div id="footer" className="d-flex flex-column align-items-center justify-content-center text-center text-light" >
      <p className="text-light text-center m-3">&copy; 2025 Jassy Movies. All rights reserved.</p>
      <div className="d-flex justify-content-center mb-2">
          <a href="https://www.linkedin.com/in/yasmin-ali-32b684229/"><i className="bi bi-linkedin mx-2"></i></a>
          <a><i className="bi bi-facebook mx-2"></i></a>
          <a><i className="bi bi-twitter-x mx-2"></i></a>
      </div>
  </div>
        </>
    )
}
export default Footer;
