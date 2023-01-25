import { Coffe } from "../../fixtures/coffe-list"
import { ActionTypesShoppingCart } from "./ShoppingCartActions";

import { produce } from 'immer'

interface ShoppingCart {
  coffe: Coffe[];
  qty: number;
};

export function shoppingCartReducer(state: ShoppingCart, action: any) {
  switch (action.type) {
    case ActionTypesShoppingCart.ADD_ITEM_TO_CART: {


      return produce(state, (draft) => {
        draft.coffe.push(action.payload.coffe)
        draft.coffe.map
        draft.qty = action.payload.qty + state.qty
      })
    }

    case ActionTypesShoppingCart.REMOVE_ITEM_TO_CART: {
      return state
    }

    default:
      return state
  }
}