import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./style.scss";

const Burger: React.FC = () => {
  const showSettings = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    // Ajouter ici la logique pour les paramètres si nécessaire
  };

  return (
    <Menu right noOverlay width={"100%"} pageWrapId={"page-wrap"}>
      <a id="home" className="menu-item" href="/">
        Accueil
      </a>
      <a id="skills" className="menu-item" href="/">
        Compétences
      </a>
      <a id="portfolio" className="menu-item" href="/portfolio">
        Portfolio
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};

export default Burger;
