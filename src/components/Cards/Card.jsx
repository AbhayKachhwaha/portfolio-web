import React from "react";
import {
  CardWrapper,
  ProjectItem,
  ProjectList,
  ProjectCard,
  ProjectContainer,
  ProjectLink,
} from "./CardElements";
import projectimg from "../../images/Project1.jpg";

const Card = () => {
  return (
    <CardWrapper>
      <ProjectList>
        <ProjectItem>
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
        </ProjectItem>
        <ProjectItem>
          <ProjectCard>
            <a
              href="https://weatherpwareact99.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={projectimg} alt="projectImg" />
            </a>
            <ProjectContainer>
              <h4>Web Application PWA</h4>
            </ProjectContainer>
          </ProjectCard>
        </ProjectItem>
        <ProjectItem>
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
        </ProjectItem>
        <ProjectItem>
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
        </ProjectItem>
      </ProjectList>
    </CardWrapper>
  );
};

export default Card;
