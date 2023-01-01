import { CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Text } from '../../../../components/Typography'
import { FlexSubtitleCheckout } from '../../styles'
import { InputPaymentsContainer } from './styles'

export function InputPayments() {
  const { color } = useTheme()

  return (
    <InputPaymentsContainer>
      <FlexSubtitleCheckout>
        <CurrencyDollar size={22} color={color.brand['purple-dark']} />
        <div>
          <Text size="m" color="subtitle" as="span">
            Pagamento
          </Text>
          <Text size="s" color="text" as="span">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </Text>
        </div>
      </FlexSubtitleCheckout>
      <button type="button">Cartão de crédito</button>
      <button type="button">Cartão de crédito</button>
      <button type="button">Cartão de crédito</button>
    </InputPaymentsContainer>
  )
}
