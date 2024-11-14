import React from "react";
import s from "./style.module.scss";
import Button from "../../components/Button/Button";
import StackList from "../../components/StackList/StackList";
import WorkCards from "../../components/WorkCards/WorkCards";
import Form from "../../components/Form/Form";
import oc from "../../assets/img/openclassrooms.png";

const Home: React.FC = () => {
  return (
    <main>
      <section className={s.landing} id="home_section">
        <h1 className={s.landing__title}>Développeur FullStack</h1>
        <p className={s.landing__introduction}>
          Passionné par le développement web, j'utilise principalement{" "}
          <strong>React</strong> et <strong>NodeJS</strong> pour concevoir des
          solutions modernes et efficaces en mettant l'accent sur l'expérience
          utilisateur et la qualité du code.
        </p>
        <Button buttonName="Contactez-moi" destination="#contact_form" />
      </section>
      <section className={s.stack} id="skills_section">
        <h2 className={s.stack__title}>&lt;Compétences /&gt;</h2>{" "}
        <p className={s.stack__text}>
          Grâce à la formation{" "}
          <img className={s.oc_logo} src={oc} alt="OpenClassrooms" />, j'ai pu
          developper ces compétences :
        </p>
        <StackList />
      </section>
      <section className={s.works} id="portfolio_section">
        <h2 className={s.works__title}>&lt;Projets /&gt;</h2>
        <p className={s.works__text}>
          Voici une liste des projets sur lesquels j'ai travaillé dans le
          cadre de la formation :
        </p>
        <WorkCards />
      </section>
      <section className={s.form} id="contact_form">
        <Form />
      </section>
    </main>
  );
};

export default Home;
