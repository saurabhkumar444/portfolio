import React from "react";
import "./ProjectCard.css";
import ProjectCard from "./ProjectCard";
import ProjectData from "../ProjectData";

const Work = () => {
  console.log(ProjectData);
  return (
    <div className="work-container">
      <h1 className="project-heading">Project</h1>
      <div className="project-container">
        {ProjectData.length &&
          ProjectData.map((item, index) => {
            return (
              <ProjectCard
                key={index}
                imgsrc={item.imgsrc}
                title={item.title}
                text={item.text}
                view={item.view}
                source={item.source}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Work;
