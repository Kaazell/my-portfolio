import React from "react";
import s from "./style.module.scss";
import Button from "../../components/Button/Button";

const Home: React.FC = () => {
  return (
    <>
      <div className={s.landing}>
        <h1>Développeur FullStack</h1>
        <h2>
          J'utilise principlaement React et NodeJS pour concevoir des solutions
          modernes et efficaces
        </h2>
        <Button buttonName="Prendre RDV >" />
      </div>
    </>
  );
};

export default Home;
