import React from "react";
import "./ProjectInfoCard.css";
import { Fade } from "react-reveal";

function ProjectInfoCard({ url, projectName, projectDescription }) {
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <>
      <Fade bottom duration={1000} distance="20px">
        <div className="project-card-div">
          <div className="project-name-div">
            <p className="project-name">{projectName}</p>
          </div>
          <p className="project-description">{projectDescription}</p>
          <div className="click-url">
            <span></span>
            <div className="learn-more" onClick={() => openInNewTab(url)}>
              View project
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default ProjectInfoCard;
