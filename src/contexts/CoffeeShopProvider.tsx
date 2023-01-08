import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { CoffeeContext, coffeeReducer } from '../reduces/coffee/reduce'
import {
  addItemCoffeeShop,
  addNewCoffeeShop,
  clearItemCoffeeShop,
  removeCoffeeShop,
  removeItemCoffeeShop,
} from '../reduces/coffee/actions'

interface CoffeeShopContextTypes {
  coffee: CoffeeContext[]
  addCoffeeShopCart: (data: CoffeeContext) => void
  addItemCoffeShopCart: (data: CoffeeContext) => void
  removeCoffeShopCart: (idCoffee: string) => void
  removeItemCoffeShopCart: (data: CoffeeContext) => void
  clearItemCoffeeShopCart: () => void
}

export const CoffeeShopContext = createContext({} as CoffeeShopContextTypes)

interface CoffeeShopContextProps {
  children: ReactNode
}

export function CoffeeShopProvider({ children }: CoffeeShopContextProps) {
  const [coffeeState, dispatch] = useReducer(
    coffeeReducer,
    { coffee: [] },
    () => {
      const storedStateJSON = localStorage.getItem(
        '@ignite-coffee-delivery-statate-1.0.0',
      )

      if (storedStateJSON) {
        return JSON.parse(storedStateJSON)
      }

      return {
        coffee: [],
      }
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeState)

    localStorage.setItem('@ignite-coffee-delivery-statate-1.0.0', stateJSON)
  }, [coffeeState])

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

  function clearItemCoffeeShopCart() {
    dispatch(clearItemCoffeeShop())
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
        clearItemCoffeeShopCart,
      }}
    >
      {children}
    </CoffeeShopContext.Provider>
  )
}
