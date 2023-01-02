import { CoffeeSelected } from './components/CoffeeSelected'
import { FormAdress } from './components/FormAdress'
import { InputPayments } from './components/InputPayments'
import {
  CheckoutContainer,
  CheckoutContainerFlex,
  TitleChekout,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <CheckoutContainerFlex>
        <div>
          <TitleChekout size="x-s" weight={700}>
            Complete seu pedido
          </TitleChekout>
          <FormAdress />
          <InputPayments />
        </div>
        <div>
          <TitleChekout size="x-s" weight={700}>
            Cafés selecionados
          </TitleChekout>
          <CoffeeSelected />
        </div>
      </CheckoutContainerFlex>
    </CheckoutContainer>
  )
}
