import s from "./style.module.scss";

export function Header() {
  return (
    <header className={s.header}>
      <h1 className={s.title}> &lt;Kaazell /&gt;</h1>
    </header>
  );
}
