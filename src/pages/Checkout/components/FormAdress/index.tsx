import { CurrencyDollar, MapPin } from 'phosphor-react'
import { FormCardContainer } from '../FormCard/styles'

export function FormAdress() {
  return (
    <FormCardContainer>
      <h1>Complete seu pedido</h1>

      <div>
        <MapPin size={22} />
        <div>
          <h2>Endereço de Entrega</h2>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </div>

      <input type="text" placeholder="CEP" />
      <input type="text" placeholder="Rua" />

      <div>
        <input type="number" placeholder="Número" />
        <div>
          <input type="text" placeholder="Complementar" />
          <span>Opcional</span>
        </div>
        <input type="text" placeholder="Bairro" />
        <input type="text" placeholder="Cidade" />
      </div>

      <div>
        <div>
          <CurrencyDollar size={22} />
          <div>
            <span>Pagamento</span>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </div>
        <button type="button">Cartão de crédito</button>
        <button type="button">Cartão de crédito</button>
        <button type="button">Cartão de crédito</button>
      </div>
    </FormCardContainer>
  )
}
