import { Coffe } from "../../fixtures/coffe-list"
import { ActionTypesShoppingCart } from "./ShoppingCartActions";

interface ShoppingCart {
  coffe: Coffe[];
  qty: number;
};

export function shoppingCartReducer(state: ShoppingCart, action: any) {
  switch (action.type) {
    case ActionTypesShoppingCart.ADD_COFFE: {
      return state
    }

    case ActionTypesShoppingCart.REMOVE_COFFE: {
      return state
    }

    default:
      return state
  }
}