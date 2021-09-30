import React from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import Developer from "../../assets/images/Developer.svg";
import "./AboutMe.css";
import SocialMedia from "../../comps/SocialMedia/SocialMedia.js";
import Button from "../../comps/Button/Button.js";

function AboutMe() {
  return (
    <>
      <Fade bottom duration={1000} distance="40px">
        <div className="aboutme-main" id="aboutme">
          <div className="about-main">
            <div className="about-text-div">
              <div>
                <h1 className="about-text">
                  {" "}
                  Hi all, I'm Avi{" "}
                  <span className="wave-emoji">{emoji("👋")}</span>
                </h1>
                <p className="about-text-p subTitle">
                  A passionate Full Stack Software Developer 🚀 having an
                  experience of building Web and Mobile applications with
                  JavaScript / Reactjs / Nodejs / Flutter and some other cool
                  libraries and frameworks.
                </p>
                <SocialMedia />
                <div className="about-button-div">
                  <Button
                    btnText="Resume"
                    newTab={true}
                    href="https://drive.google.com/file/d/1zNMKL2mafTQpTAluqji3XLUnrYbSocRy/view?usp=sharing"
                  />
                </div>
              </div>
            </div>
            <div className="about-image-div">
              <img alt="Developer" src={Developer}></img>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default AboutMe;
