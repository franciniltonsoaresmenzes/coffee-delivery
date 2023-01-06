import { createContext, ReactNode, useReducer } from 'react'
import { CoffeeContext, coffeeReducer } from '../reduces/coffee/reduce'
import {
  addItemCoffeeShop,
  addNewCoffeeShop,
  removeCoffeeShop,
  removeItemCoffeeShop,
} from '../reduces/coffee/actions'

interface CoffeeShopContextTypes {
  coffee: CoffeeContext[]
  addCoffeeShopCart: (data: CoffeeContext) => void
  addItemCoffeShopCart: (data: CoffeeContext) => void
  removeCoffeShopCart: (idCoffee: string) => void
  removeItemCoffeShopCart: (data: CoffeeContext) => void
}

export const CoffeeShopContext = createContext({} as CoffeeShopContextTypes)

interface CoffeeShopContextProps {
  children: ReactNode
}

export function CoffeeShopProvider({ children }: CoffeeShopContextProps) {
  const [coffeeState, dispatch] = useReducer(coffeeReducer, { coffee: [] })

  function addCoffeeShopCart(data: CoffeeContext) {
    dispatch(addNewCoffeeShop(data))
  }

  function removeCoffeShopCart(idCoffee: string) {
    dispatch(removeCoffeeShop(idCoffee))
  }

  function removeItemCoffeShopCart(data: CoffeeContext) {
    dispatch(removeItemCoffeeShop(data))
  }

  function addItemCoffeShopCart(data: CoffeeContext) {
    dispatch(addItemCoffeeShop(data))
  }

  const { coffee } = coffeeState

  return (
    <CoffeeShopContext.Provider
      value={{
        addCoffeeShopCart,
        coffee,
        removeCoffeShopCart,
        removeItemCoffeShopCart,
        addItemCoffeShopCart,
      }}
    >
      {children}
    </CoffeeShopContext.Provider>
  )
}
