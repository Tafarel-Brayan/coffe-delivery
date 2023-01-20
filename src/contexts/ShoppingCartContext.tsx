import { createContext, ReactNode, useReducer } from "react";
import { Coffe } from "../fixtures/coffe-list";
import {
  addNewCoffeAction,
  removeCoffeAction,
} from "../reducers/ShoppingCart/ShoppingCartActions";
import { shoppingCartReducer } from "../reducers/ShoppingCart/ShoppingCartReducer";

type ShoppingCartType = {
  coffe: Coffe[];
  qty: number;
  addCoffe: (coffe: Coffe) => void;
  removeCoffe: (id: string) => void;
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

  const { coffe, qty } = coffeState;

  const addCoffe = (coffe: Coffe) => {
    dispatch(addNewCoffeAction(coffe));
  };

  const removeCoffe = (id: string) => {
    dispatch(removeCoffeAction());
  };

  return (
    <ShoppingCartContext.Provider value={{ coffe, qty, addCoffe, removeCoffe }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
