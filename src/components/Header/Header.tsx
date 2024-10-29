import { useEffect, useState } from "react";
import Burger from "../Burger/Burger";
import s from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export function Header() {
  const [showBurger, setShowBurger] = useState(window.innerWidth <= 850);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 850px)");
    const handleMediaChange = () => setShowBurger(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <header id="header">
      <div className={s.header}>
        <h1 className={s.title}>&lt;ATEF LACHHAB /&gt;</h1>
        <nav>
          <ul>
            <li>
              <a href="#home_section">Accueil</a>
            </li>
            <li>
              <a href="#skills_section">Compétences</a>
            </li>
            <li>
              <a href="#portfolio_section">Projets</a>
            </li>
            <li>
              <a href="#contact_form">Contact</a>
            </li>
            <li className={s.first_sm_icon}>
              <a
                href="https://github.com/Kaazell/"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/atef-lachhab-682184255/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/atef.u/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </nav>
        {showBurger && <Burger />}
      </div>
    </header>
  );
}
