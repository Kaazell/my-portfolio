import React from "react";
import s from "./style.module.scss";
import json from "../../assets/json/projects.json";
import { useNavigate } from "react-router-dom";
import Tag from "../Tag/Tag";

const WorkCards: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={s.work_cards}>
      {json.map((project, index) => (
        <div
          key={`${project.id}-${project.title}-${index}`}
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
            <p className={s.desktop}>{project.longDescription}</p>
            <div className={(s.tag_container, s.desktop)}>
              {project.tags.map((item) => (
                <Tag key={item} tag={item} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCards;
