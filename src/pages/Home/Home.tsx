import React from "react";
import s from "./style.module.scss";
import Button from "../../components/Button/Button";
import StackList from "../../components/StackList/StackList";
import WorkCards from "../../components/WorkCards/WorkCards";
import Form from "../../components/Form/Form";
import oc from "../../assets/img/openclassrooms.png";

const Home: React.FC = () => {
  return (
    <>
      <div className={s.landing} id="home_section">
        <div className={s.landing_items}>
          <h2>Développeur FullStack</h2>
          <p>
            Passionné par le développement web, j'utilise principalement{" "}
            <strong>React</strong> et <strong>NodeJS</strong> pour concevoir des
            solutions modernes et efficaces en mettant l'accent sur l'expérience
            utilisateur et la qualité du code.
          </p>
          <Button buttonName="Contactez-moi" destination="#contact_form" />
        </div>
      </div>
      <div className={s.sections_container}>
        <section className={s.stack} id="skills_section">
          <h3 style={{ textAlign: "left" }}>&lt;Compétences /&gt;</h3>{" "}
          <p className={s.oc_text}>
            Grâce à la formation{" "}
            <img className={s.oc_logo} src={oc} alt="OpenClassrooms" />, j'ai pu
            developper ces compétences :
          </p>
          <StackList />
        </section>
        <section className={s.works} id="portfolio_section">
          <h3>&lt;Projets /&gt;</h3>
          <p className={s.oc_text}>
            Voici une liste des projets sur lesquels j'ai travaillé dans le
            cadre de la formation :
          </p>
          <WorkCards />
        </section>
        <section className={s.form_section} id="contact_form">
          {/* <h3 style={{ textAlign: "left" }}>&lt;Contact /&gt;</h3> */}
          <Form />
        </section>
      </div>
    </>
  );
};

export default Home;
