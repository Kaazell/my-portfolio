import React from "react";
import s from "./style.module.scss";
const Form: React.FC = () => {
  return (
    <div className={s.form_container}>
      <h4>Discutons de votre projet</h4>
      <ul>
        <li>Par mail : atef.lachhab1@gmail.com</li>
        <li>Par téléphone : +33 7 54 32 50 53 </li>
        <li>
          Sur LinkedIn :{" "}
          <a href="https://www.linkedin.com/in/atef-lachhab">Atef Lachhab</a>
        </li>
      </ul>
    </div>
  );
};

export default Form;
