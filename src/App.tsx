import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CoffeeShopProvider } from './contexts/CoffeeShopProvider'

import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeShopProvider>
          <Router />
        </CoffeeShopProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
