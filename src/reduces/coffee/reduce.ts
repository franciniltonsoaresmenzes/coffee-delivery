import { CoffeeActions } from './actions'

export interface CoffeeContext {
  id: string
  name: string
  description: string
  tags: string[]
  image: string
  price: number
  quantity: number
}

interface CoffeeState {
  coffee: CoffeeContext[]
}

export interface actionType {
  ActionTyper: string
  payload: any
}

export function coffeeReducer(
  state: CoffeeState,
  action: actionType,
): CoffeeState {
  switch (action.ActionTyper) {
    case CoffeeActions.ADD_NEW_COFFEE_SHOP: {
      const coffee = state.coffee.map((coffee) => {
        if (coffee.id === action.payload.id) {
          return {
            ...coffee,
            quantity: coffee.quantity + action.payload.quantity,
          }
        }
      })
      console.log(coffee)
      return {
        coffee: [...state.coffee, action.payload],
      }
    }

    case CoffeeActions.REMOVE_NEW_COFFEE_SHOP: {
      const coffeeWithoutDelete = state.coffee.filter(
        (coffee) => coffee.id !== action.payload,
      )
      return {
        coffee: coffeeWithoutDelete,
      }
    }

    default:
      return {
        coffee: state.coffee,
      }
  }
}
