import React from "react";
import s from "./style.module.scss";
const Form: React.FC = () => {
  return (
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
  );
};

export default Form;
