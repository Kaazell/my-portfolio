import React from "react";
import s from "./style.module.scss";
import Button from "../../components/Button/Button";
import StackList from "../../components/StackList/StackList";
import WorkCards from "../../components/WorkCards/WorkCards";
import Form from "../../components/Form/Form";

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
      <section className={(s.stack,  s.post_landing)} id="skills_section">
        <h2 className={s.stack__title}>&lt;Compétences /&gt;</h2>{" "}
        <StackList />
      </section>
      <section className={(s.works, s.post_landing)} id="portfolio_section">
        <h2 className={s.works__title}>&lt;Projets /&gt;</h2>
        <WorkCards />
      </section>
      <section className={(s.form, s.post_landing)} id="contact_form">
        <Form />
      </section>
    </main>
  );
};

export default Home;
