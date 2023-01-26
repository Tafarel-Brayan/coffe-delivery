import { createContext, ReactNode, useReducer, useState } from "react";
import { Coffe } from "../fixtures/coffe-list";
import {
  addNewCoffeAction,
  removeCoffeAction,
} from "../reducers/ShoppingCart/ShoppingCartActions";
import { shoppingCartReducer } from "../reducers/ShoppingCart/ShoppingCartReducer";

type ShoppingCartType = {
  coffe: Coffe[];
  qty: number;
  paymentMode: string;
  addItemCart: (coffe: Coffe, qty: number) => void;
  removeCoffe: (id: string) => void;
  setPayment: (payment: string) => void;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export const ShoppingCartContext = createContext({} as ShoppingCartType);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [coffeState, dispatch] = useReducer(shoppingCartReducer, {
    coffe: [],
    qty: 0,
  });

  const [paymentMode, setPaymentMode] = useState("");

  const { coffe, qty } = coffeState;

  const addItemCart = (coffe: Coffe, qty: number) => {
    dispatch(addNewCoffeAction(coffe, qty));
  };

  const removeCoffe = (id: string) => {
    dispatch(removeCoffeAction());
  };

  const setPayment = (payment: string) => {
    setPaymentMode(payment);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ coffe, qty, paymentMode, addItemCart, removeCoffe, setPayment }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
