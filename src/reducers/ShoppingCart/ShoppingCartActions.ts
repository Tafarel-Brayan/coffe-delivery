import { Coffe } from "../../fixtures/coffe-list"

export enum ActionTypesShoppingCart {
  ADD_ITEM_TO_CART = 'ADD_NEW_COFFE',
  REMOVE_ITEM_TO_CART = 'REMOVE_A_COFFE',
}

export const addNewCoffeAction = (coffe: Coffe, qty: number) => {
  return {
    type: ActionTypesShoppingCart.ADD_ITEM_TO_CART,
    payload: {
      coffe,
      qty
    }
  }
}

export const removeCoffeAction = () => {
  return {
    type: ActionTypesShoppingCart.REMOVE_ITEM_TO_CART
  }
}