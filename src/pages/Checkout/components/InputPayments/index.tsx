import { CurrencyDollar } from 'phosphor-react'

export function InputPayments() {
  return (
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
  )
}
