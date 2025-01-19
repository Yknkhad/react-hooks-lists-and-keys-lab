import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects); // You can use this to check the projects array in the console

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* Render a ProjectItem component for each project */}
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            about={project.about}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
