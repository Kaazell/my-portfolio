// Check ->
import s from "./style.module.scss";
import Button from "../../components/Button/Button";

export function Error() {
  return (
    <div className={s.container}>
      <h1>404</h1>
      <p>Oups! Cette page n'existe pas.</p>
      <Button destination="/" buttonName="Explorer >" />
    </div>
  );
}
