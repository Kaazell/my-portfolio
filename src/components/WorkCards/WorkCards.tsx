import React from "react";
import s from "./style.module.scss";
import json from "../../assets/json/projects.json";
import { useNavigate } from "react-router-dom";

const WorkCards: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={s.work_cards}>
      {json.map((project, index) => (
        <div
          key={`${project.id}-${project.title}-${index}`} // Clé mise à jour pour plus d'unicité
          className={s.work_card}
          onClick={() => {
            navigate("/work/" + project.id);
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={project.images[0].url}
            alt={project.title}
            className={s.work_card_image}
          />
          <div className={s.card_details}>
            <h4>
              {project.title} - {project.shortDescription}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCards;
