import { createContext, ReactNode, useReducer } from 'react'
import { CoffeeContext, coffeeReducer } from '../reduces/coffee/reduce'
import { addNewCoffeeShop, removeCoffeeShop } from '../reduces/coffee/actions'

interface CoffeeShopContextTypes {
  coffee: CoffeeContext[]
  addCoffeeShopCart: (data: CoffeeContext) => void
  removeCoffeShopCart: (idCoffee: string) => void
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

  const { coffee } = coffeeState

  return (
    <CoffeeShopContext.Provider
      value={{ addCoffeeShopCart, coffee, removeCoffeShopCart }}
    >
      {children}
    </CoffeeShopContext.Provider>
  )
}
