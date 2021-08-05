import React from "react";
import {
  CardWrapper,
  ProjectItem,
  ProjectList,
  // ProjectCard,
  // ProjectContainer,
  // ProjectLink,
} from "./CardElements";
import ProjectCard from "./ProjectCard";
import { projectData } from "./ProjectData";

const Card = () => {
  return (
    <CardWrapper>
      <ProjectList>
        {projectData.map((data) => {
           return (<ProjectItem>
            <ProjectCard
              link={data.link}
              projectimg={data.imgsrc}
              alttext={data.alttext}
              projecttitle={data.projectTitle}
              projectdescription={data.projectDescription}
            />
          </ProjectItem>)
        })}

        {/* <ProjectItem>
          <ProjectCard>
            <ProjectLink>
              <a
                href="https://weatherpwareact99.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={projectimg} alt="projectImg" />
              </a>
            </ProjectLink>
            <ProjectContainer>
              <h4>Web Application PWA</h4>
              <p>A weather report application progressive web app</p>
            </ProjectContainer>
          </ProjectCard>
        </ProjectItem> */}
      </ProjectList>
    </CardWrapper>
  );
};

export default Card;
