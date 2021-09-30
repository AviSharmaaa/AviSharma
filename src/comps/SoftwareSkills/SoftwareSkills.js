import {
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNpm,
  FaDatabase,
} from "react-icons/fa";
import { SiJavascript, SiPython, SiFlutter } from "react-icons/si";
import React from "react";
import "./SoftwareSkills.css";

function SoftwareCard({ skillIcon, skillName, IconName }) {
  return (
    <>
      <div>
        <i className="software-icons">
          <IconName />
        </i>
      </div>
    </>
  );
}

function SoftwareSkills() {
  return (
    <div className="disp">
      <SoftwareCard IconName={FaHtml5} skillName="Node.js" />
      <SoftwareCard IconName={FaCss3Alt} skillName="Node.js" />
      <SoftwareCard IconName={SiJavascript} skillName="Node.js" />
      <SoftwareCard IconName={FaReact} skillName="Node.js" />
      <SoftwareCard IconName={FaNode} skillName="Node.js" />
      <SoftwareCard IconName={SiFlutter} skillName="Node.js" />
      <SoftwareCard IconName={FaNpm} skillName="Node.js" />
      <SoftwareCard IconName={FaDatabase} skillName="Node.js" />
      <SoftwareCard IconName={SiPython} skillName="Node.js" />
    </div>
  );
}

export default SoftwareSkills;
