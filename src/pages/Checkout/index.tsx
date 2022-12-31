import { FormAdress } from './components/FormAdress'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <FormAdress />
    </CheckoutContainer>
  )
}
