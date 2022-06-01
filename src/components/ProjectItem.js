import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies);
  const technologiesElements = technologies.map((technology) => {
    return <span key={technology} className="SPAN">{technology}</span>
  })
    return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesElements}
      </div>
    </div>
  );
}

export default ProjectItem;
