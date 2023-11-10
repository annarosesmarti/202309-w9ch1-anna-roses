import React from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonText {
  buttonText: string;
  buttonColor: "button__yellow" | "button__black";
}

const Button = ({
  buttonText,
  buttonColor,
}: ButtonText): React.ReactElement => {
  return (
    <ButtonStyled>
      <button className={`button ${buttonColor}`}>{buttonText}</button>
    </ButtonStyled>
  );
};

export default Button;
