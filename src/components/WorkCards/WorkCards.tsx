import React from "react";
import s from "./style.module.scss";
import json from "../../assets/json/projects.json";

const WorkCards: React.FC = () => {
  return (
    <div className={s.work_cards}>
      {json.map((project) => (
        <div key={project.id} className={s.work_card}>
          <img
            src={project.images[0].url}
            alt={project.title}
            className={s.work_card_image}
          />
          <div className={s.work_card_content}>
            <h2 className={s.work_card_title}>
              {project.title} - {project.shortDescription}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCards;
