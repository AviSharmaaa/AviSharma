import React from "react";
import "./Projects.css";
import { Fade } from "react-reveal";
import ProjectInfoCard from "../../comps/ProjectInfoCard/ProjectInfoCard";

function Projects() {
  return (
    <>
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="projects">
          <h1 className="project-heading">Personal Projects</h1>
          <div className="project-cards">
            <ProjectInfoCard
              projectName="News Headlines Classifier"
              projectDescription="A python console application for Sentiment Classification of News Headlines using Multinomial Naive Bayes classifier which is suitable for text classification."
              url="https://github.com/AviSharmaaa/Sentiment_Classification_of_News_Headlines"
            />
            <ProjectInfoCard
              projectName="Hangman Game"
              projectDescription="A simple Hangman Game build using Flutter framework. It comes with 2 modes, an easy mode which has 5 lives per turn, and a timer mode with 60 secs of the time limit and 5 lives per turn."
              url="https://github.com/AviSharmaaa/Hangman_Game_Flutter"
            />
            <ProjectInfoCard
              projectName="TODO List"
              projectDescription="A Simple To-do app design in flutter to keep track of your task. You can add title, due-date and priority to your tasks."
              url="https://github.com/AviSharmaaa/todo_list"
            />
            <ProjectInfoCard
              projectName="Weather Webapp"
              projectDescription="A simple Weather App built using HTML, CSS, JavaScript and Open Weather Api."
              url="https://github.com/AviSharmaaa/Weather_API"
            />
            <ProjectInfoCard
              projectName="Quiz App"
              projectDescription="Quiz app built using Flutter"
              url="https://github.com/AviSharmaaa/Quiz_App"
            />
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Projects;
