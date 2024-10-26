import Burger from "../Burger/Burger";
import s from "./style.module.scss";

export function Header() {
  return (
    <header className={s.header}>
      <h1 className={s.title}>&lt;ATEF LACHHAB /&gt;</h1>
      <Burger />
    </header>
  );
}
