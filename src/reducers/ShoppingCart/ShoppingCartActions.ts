import { Coffe } from "../../fixtures/coffe-list"

export enum ActionTypesShoppingCart {
  ADD_COFFE = 'ADD_NEW_COFFE',
  REMOVE_COFFE = 'REMOVE_A_COFFE',
}

export const addNewCoffeAction = (coffe: Coffe) => {
  return {
    type: ActionTypesShoppingCart.ADD_COFFE,
    payload: {
      coffe
    }
  }
}

export const removeCoffeAction = () => {
  return {
    type: ActionTypesShoppingCart.REMOVE_COFFE
  }
}