import React from "react";
import "./ContactMe.css";
import UserImg from "../../assets/images/avi.jpeg";
import { IoLocationOutline } from "react-icons/io5";
import { Fade } from "react-reveal";
import SocialMedia from "../../comps/SocialMedia/SocialMedia";

function ContactMe() {
  return (
    <>
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="contact-me">
          <h1 className="heading">Reach Out to me!</h1>
          <div className="row">
            <div className="main-content-profile">
              <div>
                <p className="subTitle">
                  DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
                  ALL.
                </p>
              </div>
              <h2 className="bio-text">
                Flutter || Python || C++ || Web Developer ||
              </h2>
              <div className="location-div">
                <span className="prop">
                  <IoLocationOutline /> India
                </span>
              </div>
              <div className="oppun-div">
                <span className="prop">Open for opportunities: Yes</span>
              </div>
              <SocialMedia />
            </div>
            <div className="user-img">
              <img className="profile-img" alt="Avi Sharma" src={UserImg} />
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default ContactMe;
