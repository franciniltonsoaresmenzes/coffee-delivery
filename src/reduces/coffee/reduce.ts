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
      const coffeeAlreadyExstInCart = state.coffee.findIndex(
        (coffee) => coffee.id === action.payload.id,
      )
      if (coffeeAlreadyExstInCart < 0) {
        return {
          coffee: [...state.coffee, action.payload],
        }
      } else {
        const coffees = state.coffee.map((coffee) => {
          if (coffee.id === action.payload.id) {
            return {
              ...coffee,
              quantity: coffee.quantity + action.payload.quantity,
            }
          } else {
            return coffee
          }
        })
        return {
          coffee: [...coffees],
        }
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

    case CoffeeActions.REMOVE_ITEM_COFFEE_SHOP: {
      const coffees = state.coffee.map((coffee) => {
        if (coffee.id === action.payload.id) {
          return {
            ...coffee,
            quantity: coffee.quantity - 1,
          }
        } else {
          return coffee
        }
      })
      return {
        coffee: [...coffees],
      }
    }

    case CoffeeActions.ADD_ITEM_COFFEE_SHOP: {
      const coffees = state.coffee.map((coffee) => {
        if (coffee.id === action.payload.id) {
          return {
            ...coffee,
            quantity: coffee.quantity + 1,
          }
        } else {
          return coffee
        }
      })
      return {
        coffee: [...coffees],
      }
    }

    default:
      return {
        coffee: state.coffee,
      }
  }
}
