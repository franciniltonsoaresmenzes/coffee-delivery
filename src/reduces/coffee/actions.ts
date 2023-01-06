import { actionType, CoffeeContext } from './reduce'

export enum CoffeeActions {
  ADD_NEW_COFFEE_SHOP = 'ADD_NEW_COFFEE_SHOP',
  REMOVE_NEW_COFFEE_SHOP = 'REMOVE_NEW_COFFEE_SHOP',
  REMOVE_ITEM_COFFEE_SHOP = 'REMOVE_ITEM_COFFEE_SHOP',
  ADD_ITEM_COFFEE_SHOP = 'ADD_ITEM_COFFEE_SHOP',
}

export function addNewCoffeeShop(newCoffee: CoffeeContext): actionType {
  return {
    ActionTyper: CoffeeActions.ADD_NEW_COFFEE_SHOP,
    payload: newCoffee,
  }
}

export function removeCoffeeShop(id: string): actionType {
  return {
    ActionTyper: CoffeeActions.REMOVE_NEW_COFFEE_SHOP,
    payload: id,
  }
}

export function removeItemCoffeeShop(newCoffee: CoffeeContext): actionType {
  return {
    ActionTyper: CoffeeActions.REMOVE_ITEM_COFFEE_SHOP,
    payload: newCoffee,
  }
}

export function addItemCoffeeShop(newCoffee: CoffeeContext): actionType {
  return {
    ActionTyper: CoffeeActions.ADD_ITEM_COFFEE_SHOP,
    payload: newCoffee,
  }
}
