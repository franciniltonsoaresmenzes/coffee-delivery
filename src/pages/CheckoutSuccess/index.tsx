import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { Text, Title } from '../../components/Typography'
import { CardInfo, CheckoutSuccessContainer } from './styles'

export function CheckoutSuccess() {
  const { color } = useTheme()
  return (
    <CheckoutSuccessContainer className="container">
      <section>
        <Title color={color.brand['yellow-dark']}>Uhu! Pedido confirmado</Title>
        <Text size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </Text>

        <CardInfo>
          <InfoWithIcon
            icon={<MapPin size={16} weight="fill" />}
            colorIcon={color.brand.purple}
            description={
              <Text size="m" color="text">
                Entrega em{' '}
                <Text as="span" size="m" color="text" weight="700">
                  Rua João Daniel Martinelli, 102
                </Text>{' '}
                - Porto Alegre, RS
              </Text>
            }
          />

          <InfoWithIcon
            icon={<Timer size={16} weight="fill" />}
            colorIcon={color.brand.yellow}
            description={
              <Text size="m" color="text">
                Previsão de entrega{' '}
                <Text as="p" size="m" color="text" weight="700">
                  20 min - 30 min
                </Text>
              </Text>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar size={16} weight="fill" />}
            colorIcon={color.brand['yellow-dark']}
            description={
              <Text size="m" color="text">
                Pagamento na entrega{' '}
                <Text as="p" size="m" color="text" weight="700">
                  Cartão de Crédito
                </Text>
              </Text>
            }
          />
        </CardInfo>
      </section>
      <img src="/delivery.png" alt="" />
    </CheckoutSuccessContainer>
  )
}
