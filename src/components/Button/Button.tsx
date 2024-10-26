import s from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import React from "react";

interface ButtonProps {
  buttonName: string;
  destination: string;
}

const Button: React.FC<ButtonProps> = ({ buttonName, destination }) => {
  return (
    <a href={destination} className={s.button}>
      {buttonName}
    </a>
  );
};

export default Button;
