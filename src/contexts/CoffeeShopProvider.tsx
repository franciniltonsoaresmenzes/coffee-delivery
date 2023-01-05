import { createContext, ReactNode } from 'react'

interface CoffeeShopContextTypes {}

export const CoffeeShopContext = createContext({} as CoffeeShopContextTypes)

interface CoffeeShopContextProps {
  children: ReactNode
}

export function CoffeeShopProvider({ children }: CoffeeShopContextProps) {
  return (
    <CoffeeShopContext.Provider value={{}}>
      {children}
    </CoffeeShopContext.Provider>
  )
}
