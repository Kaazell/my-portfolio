import React from "react";
import { slide as Menu } from "react-burger-menu";
import { HashLink as Link } from "react-router-hash-link";
import "./style.scss";

const Burger: React.FC = () => {
  return (
    <Menu right noOverlay width={"100%"} pageWrapId={"page-wrap"}>
      <Link id="home" className="menu-item" smooth to="/#home_section">
        Accueil
      </Link>
      <Link id="skills" className="menu-item" smooth to="/#skills_section">
        Compétences
      </Link>
      <Link
        id="portfolio"
        className="menu-item"
        smooth
        to="/#portfolio_section"
      >
        Portfolio
      </Link>
      <Link id="contact" className="menu-item" smooth to="/#contact_form">
        Contact
      </Link>
    </Menu>
  );
};

export default Burger;
