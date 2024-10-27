import React from "react";
import s from "./style.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import json from "../../assets/json/projects.json";
import Tag from "../../components/Tag/Tag";
import Button from "../../components/Button/Button";

const WorkDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentItem = json.find((item) => item.id === Number(id));

  useEffect(() => {
    if (!currentItem) {
      navigate("/404");
    }
  }, [currentItem, navigate]);

  if (!currentItem) {
    return null;
  }

  return (
    <>
      <article className={s.main_container}>
        <h1>
          {currentItem.title} - {currentItem.shortDescription}
        </h1>
        <p>{currentItem.longDescription}</p>
        <div className={s.tag_container}>
          {currentItem.tags.map((item) => (
            <Tag key={item} tag={item} />
          ))}
        </div>
        {currentItem.websiteLink && (
          <Button
            destination={currentItem.websiteLink}
            buttonName="Visiter le site"
          />
        )}
        {currentItem.githubLink && (
          <Button
            destination={currentItem.githubLink}
            buttonName="Code Source"
          />
        )}
        <section style={{ marginTop: "50px" }}>
          <h3>&lt;Galerie /&gt;</h3>
          <div className={s.map_container}>
            {currentItem.images.map((item) => (
              <div key={item.url} className={s.image_container}>
                <img key={item.url} src={item.url} alt={currentItem.title} />
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
};

export default WorkDetail;
