import React from "react";
import s from "./style.module.scss";
const Form: React.FC = () => {
  return (
    <form
      className={s.contact_form}
      action="https://formsubmit.co/atef.lachhab1@gmail.com"
      method="POST"
    >
      <label htmlFor="name">Nom:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Votre nom"
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Votre email"
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
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
