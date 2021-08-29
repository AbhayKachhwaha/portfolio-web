import React from "react";
import { CardWrapper, ProjectItem, ProjectList } from "./CardElements";
import ProjectCard from "./ProjectCard";
import { projectData } from "./ProjectData";

const Card = () => {
  return (
    <CardWrapper>
      <ProjectList>
        {projectData.map((data) => {
          return (
            <ProjectItem>
              <ProjectCard
                link={data.link}
                projectimg={data.imgsrc}
                alttext={data.alttext}
                projecttitle={data.projectTitle}
                projectdescription={data.projectDescription}
              />
            </ProjectItem>
          );
        })}
      </ProjectList>
    </CardWrapper>
  );
};

export default Card;
