import React from "react";
import "./Button.css";

function Button({ className, btnText, href, newTab }) {
  return (
    <>
      <div className="project-button">
        <a className="main-Button" href={href} target={newTab && "_blank"}>
          {btnText}
        </a>
      </div>
    </>
  );
}

export default Button;
