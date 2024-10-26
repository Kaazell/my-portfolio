import React from "react";
import s from "./style.module.scss";
import Button from "../../components/Button/Button";
import StackList from "../../components/StackList/StackList";
import WorkCards from "../../components/WorkCards/WorkCards";

const Home: React.FC = () => {
  return (
    <>
      <div className={s.landing}>
        <h2>Développeur FullStack</h2>
        <p>
          J'utilise principlaement React et NodeJS pour concevoir des solutions
          modernes et efficaces
        </p>
        <Button buttonName="Prendre RDV >" />
      </div>
      <section className={s.stack}>
        <h3>&lt;Compétences /&gt;</h3>
        <StackList />
      </section>
      <section className={s.stack}>
        <h3>&lt;Projets /&gt;</h3>
        <WorkCards />
      </section>
      <section className={s.form_container}>
        <h3>&lt;Contact /&gt;</h3>
        <form
          className={s.contact_form}
          action="https://formsubmit.co/atef.lachhab1@gmail.com"
          method="POST"
        >
          <input type="text" name="name" placeholder="Votre nom" required />
          <input type="email" name="email" placeholder="Votre email" required />
          <textarea
            name="message"
            placeholder="Votre message"
            rows={10}
            cols={60}
            required
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </>
  );
};

export default Home;
