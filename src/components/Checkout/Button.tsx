import React from "react";
import { ButtonCheckout } from "../../pages/Checkout/styles";

interface ButtonProps {
  children: React.ReactNode;
  isSelected?: boolean;
  id: string;
}

export const Button = ({ isSelected, children, id }: ButtonProps) => {
  const selected = isSelected ? "isSelected" : "notSelected";

  const handleClick = (id: string) => {
    console.log(id);
  };

  return (
    <ButtonCheckout
      type="button"
      colorProps={selected}
      onClick={(e) => handleClick(id)}
    >
      {children}
    </ButtonCheckout>
  );
};
