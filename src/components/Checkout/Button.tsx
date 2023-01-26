import React, { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { ButtonCheckout } from "../../pages/Checkout/styles";

interface ButtonProps {
  children: React.ReactNode;
  id: string;
}

export const Button = ({ children, id }: ButtonProps) => {
  const { paymentMode, setPayment } = useContext(ShoppingCartContext);
  const selected = paymentMode === id ? "isSelected" : "notSelected";

  const handleClick = (id: string) => {
    setPayment(id);
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
