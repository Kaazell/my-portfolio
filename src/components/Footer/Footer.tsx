import s from "./style.module.scss";

export function Footer() {
  return (
    <footer className={s.footer}>
      <p className={s.footer__text}>Atef Lachhab</p>
      <p className={s.footer__text}>
        Copyright © <span id="current-year">2024</span>
      </p>
    </footer>
  );
}
