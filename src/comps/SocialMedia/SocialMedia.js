import React from "react";
import "./SocialMedia.css";
import { Twitter, LinkedIn, GitHub } from "@material-ui/icons";

function SocialMedia() {
  return (
    <>
      <div className="social-media">
        <a
          href="https://github.com/AviSharmaaa"
          className="icon-button github"
          target="_blank"
        >
          <i>
            <GitHub />
          </i>
        </a>
        <a
          href="https://www.linkedin.com/in/avisharma05/"
          className="icon-button linkedin"
          target="_blank"
        >
          <i>
            <LinkedIn />
          </i>
        </a>

        <a
          href="https://twitter.com/avisharma_exe"
          className="icon-button twitter"
          target="_blank"
        >
          <i>
            <Twitter />
          </i>
        </a>
      </div>
    </>
  );
}

export default SocialMedia;
