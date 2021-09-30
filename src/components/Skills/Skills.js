import React from "react";
import "./Skills.css";
import SoftwareSkills from "../../comps/SoftwareSkills/SoftwareSkills";
import { Fade } from "react-reveal";
import DevWorking from "../../assets/images/DevWorking.svg";
import emoji from "react-easy-emoji";

function Skills() {
  return (
    <>
      <div className="main" id="skills">
        <div className="skills-main-div">
          <Fade left duration={1000}>
            <div className="skills-img-div">
              <img alt="man at work" src={DevWorking}></img>
            </div>
          </Fade>
          <Fade right duration={1000}>
            <div className="skills-text-div">
              <h1 className="skills-heading">What I do</h1>
              <p className="subTitle skills-text-subtitle">
                CRAZY FULL STACK DEVELOPER WHO IS ON A JOURNEY TO EXPLORE THE
                WORLD
              </p>
              <SoftwareSkills />
              <div>
                <p className="subTitle skills-text">
                  {emoji("⚡")} Develop highly interactive Front end / User
                  Interfaces for your mobile and web applications
                </p>
              </div>
              <div>
                <p className="subTitle skills-text">
                  {emoji("⚡")} Develop logic for Backend
                </p>
              </div>
              {/* <div>
                    <p className="subTitle skills-text">⚡ Develop logic for Backend</p>
                </div> */}
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Skills;
