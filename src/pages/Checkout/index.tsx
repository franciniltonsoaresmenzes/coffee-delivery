import { FormAdress } from './components/FormAdress'
import { InputPayments } from './components/InputPayments'
import { CheckoutContainer, TitleChekout } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <TitleChekout size="x-s" weight={700}>
        Complete seu pedido
      </TitleChekout>
      <FormAdress />
      <InputPayments />
    </CheckoutContainer>
  )
}
