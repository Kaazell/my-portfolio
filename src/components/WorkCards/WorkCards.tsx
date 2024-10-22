import React from "react";
import "./style.module.scss";
import json from "../../assets/json/projects.json";

const WorkCards: React.FC = () => {
  return (
    <div className="work-cards">
      {json.map((project) => (
        <div key={project.id} className="work-card">
          <div className="work-card__image-container"></div>
          <img
            src={project.images[0].url}
            alt={project.title}
            className="work-card__image"
          />
          <div className="work-card__content">
            <h2 className="work-card__title">{project.title}</h2>
            <p className="work-card__description">{project.shortDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCards;
