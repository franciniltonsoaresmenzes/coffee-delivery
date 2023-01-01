import { FormAdress } from './components/FormAdress'
import { InputPayments } from './components/InputPayments'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <FormAdress />
      <InputPayments />
    </CheckoutContainer>
  )
}
