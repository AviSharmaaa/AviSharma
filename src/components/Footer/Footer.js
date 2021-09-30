import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

function Footer() {
  return (
    <>
      <Fade bottom duration={1000} distance="5px">
        <div className="footer-div">
          <p className="footer-text">{emoji("Made with ❤️ by Avi Sharma")}</p>
        </div>
      </Fade>
    </>
  );
}

export default Footer;