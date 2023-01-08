import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { InputPaymentMetohd } from '../../../../components/InputsPaymentsMethod'
import { Text } from '../../../../components/Typography'
import { FlexSubtitleCheckout } from '../../styles'
import { ErrorsType } from '../FormAdress'
import { InputPaymentsContainer, InputPaymentsFlex } from './styles'

export function InputPayments() {
  const { color } = useTheme()

  const { formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

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
      <InputPaymentsFlex>
        <InputPaymentMetohd
          label="Cartão de Crédito"
          tipo="credito"
          icon={<CreditCard size={16} />}
          error={errors.paymentMethod?.message}
        />

        <InputPaymentMetohd
          label="Cartão de Débito"
          tipo="debito"
          icon={<Bank size={16} />}
        />

        <InputPaymentMetohd
          label="Dinheiro"
          tipo="dinheiro"
          icon={<Money size={16} />}
        />
      </InputPaymentsFlex>
    </InputPaymentsContainer>
  )
}
