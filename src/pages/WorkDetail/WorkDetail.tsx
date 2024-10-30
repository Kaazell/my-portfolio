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
    <div className={s.background}>
      <article className={s.main_container}>
        <div className={s.description}>
          <h1>
            {currentItem.title} - {currentItem.shortDescription}
          </h1>
          <p>{currentItem.longDescription}</p>
          <p>{currentItem.fullDescription}</p>
          <div className={s.tag_container}>
            {currentItem.tags.map((item) => (
              <Tag key={item} tag={item} />
            ))}
          </div>
          <div className={s.buttons_container}>
            {currentItem.websiteLink && (
              <Button
                destination={currentItem.websiteLink}
                buttonName="Site Web"
              />
            )}
            {currentItem.githubLink && (
              <Button
                destination={currentItem.githubLink}
                buttonName="Code Source"
              />
            )}
          </div>
        </div>

        <div className={s.gallery_container}>
          <h3>&lt;Galerie /&gt;</h3>
          <div className={s.map_container}>
            {currentItem.images.map((item) => {
              const cleanedUrl = item.url.replace(/^.*https/, "https"); // Supprime tout avant "https"

              return (
                <div
                  key={item.url}
                  className={s.image_container}
                  onClick={() => (window.location.href = cleanedUrl)}
                >
                  <img key={item.url} src={item.url} alt={currentItem.title} />
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </div>
  );
};

export default WorkDetail;
