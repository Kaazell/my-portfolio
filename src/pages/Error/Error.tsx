// Check ->
import s from "./style.module.scss";
import Button from "../../components/Button/Button";

export function Error() {
  return (
    <div className={s.container}>
      <h1>404</h1>
      <h2>Oups! Cette page n'existe pas.</h2>
      <Button
        destination="#home_section"
        buttonName="Continuer l'exploration >"
      />
    </div>
  );
}
