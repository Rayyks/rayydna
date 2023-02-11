import React from "react";
import data from "../../data.js";
import Project from "./Project.js";
import "./style.css";

const Projects = () => {
  return (
    <div className="flex3 container-fluid bg-light p-5 min-vh-100">
      {/* HEADER */}
      <header>
        <h1 className="myProject">PROJECT</h1>
      </header>
      {/* HEADER */}
      <div className=" row-start-auto">
        {data.ProjectsData.map((project) => {
          return (
            <div className="flex " key={project.id}>
              <Project
                id={project.id}
                image={project.img}
                name={project.name}
                stack={project.stack}
                live={project.live}
                source={project.source}
                desc={project.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
