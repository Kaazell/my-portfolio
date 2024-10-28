import { useEffect, useState } from "react";
import Burger from "../Burger/Burger";
import s from "./style.module.scss";

export function Header() {
  const [showBurger, setShowBurger] = useState(window.innerWidth <= 750);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 750px)");
    const handleMediaChange = () => setShowBurger(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <header className={s.header}>
      <h1 className={s.title}>&lt;ATEF LACHHAB /&gt;</h1>
      <nav>
        <ul>
          <li>
            <a href="#home_section">Compétences</a>
          </li>
          <li>
            <a href="#portfolio_section">Projets</a>
          </li>
          <li>
            <a href="#contact_form">Contact</a>
          </li>
        </ul>
      </nav>
      {showBurger && <Burger />}
    </header>
  );
}
