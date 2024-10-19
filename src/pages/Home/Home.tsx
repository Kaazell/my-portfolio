import React from "react";
import s from "./style.module.scss";
import Button from "../../components/Button/Button";
import StackList from "../../components/StackList/StackList";

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
        <div className={s.stacklist_container}>
          <StackList />
        </div>
      </section>
    </>
  );
};

export default Home;
