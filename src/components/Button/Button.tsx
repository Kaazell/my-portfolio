import React from "react";
import s from "./style.module.scss";
import { useNavigate } from "react-router-dom";
interface ButtonProps {
  buttonName: string;
}
const Button: React.FC<ButtonProps> = ({ buttonName }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/")} className={s.button}>
      {buttonName}
    </button>
  );
};

export default Button;
