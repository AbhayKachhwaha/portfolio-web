import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="projectcard">
      <div className="projectlink">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img src={props.projectimg} alt={props.alttext} />
        </a>
      </div>
      <div className="projectcontainer">
        <h4>{props.projecttitle}</h4>
        <p>{props.projectdescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
