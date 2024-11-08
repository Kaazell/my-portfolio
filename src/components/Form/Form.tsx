import React from "react";
import s from "./style.module.scss";
const Form: React.FC = () => {
  return (
    <div className={s.form_container}>
      <h4>Discutons de votre projet</h4>
      <ul>
        <li>Par mail : atef.lachhab1@gmail.com</li>
        <li>Par téléphone : <ul><li>France: +33 7 54 32 50 53</li><li>Canada: +1 579 368 7160</li></ul> </li>
        <li>
          Sur LinkedIn :{" "}
          <a href="https://www.linkedin.com/in/atef-lachhab">Atef Lachhab</a>
        </li>
      </ul>
    </div>
  );
};

export default Form;
