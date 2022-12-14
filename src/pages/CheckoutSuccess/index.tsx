import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { Text, Title } from '../../components/Typography'
import { BuyNewCoffee } from '../Checkout'
import { BorderGradient, CardInfo, CheckoutSuccessContainer } from './styles'

interface LocationType {
  state: BuyNewCoffee
}

export function CheckoutSuccess() {
  const { color } = useTheme()
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [state, navigate])

  if (!state) return <></>

  return (
    <CheckoutSuccessContainer className="container">
      <section>
        <Title color={color.brand['yellow-dark']}>Uhu! Pedido confirmado</Title>
        <Text size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </Text>

        <BorderGradient>
          <CardInfo>
            <InfoWithIcon
              icon={<MapPin size={16} weight="fill" />}
              colorIcon={color.brand.purple}
              description={
                <Text size="m" color="text">
                  Entrega em{' '}
                  <Text as="span" size="m" color="text" weight="700">
                    {state.street}, {state.number}
                  </Text>{' '}
                  {state.city}
                </Text>
              }
            />

            <InfoWithIcon
              icon={<Timer size={16} weight="fill" />}
              colorIcon={color.brand.yellow}
              description={
                <Text size="m" color="text">
                  Previsão de entrega{' '}
                  <Text size="m" color="text" weight="700">
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
                  <Text size="m" color="text" weight="700">
                    {state.paymentMethod === 'dinheiro'
                      ? 'Dinheiro'
                      : 'Cartão ' + state.paymentMethod}
                  </Text>
                </Text>
              }
            />
          </CardInfo>
        </BorderGradient>
      </section>
      <img src="/delivery.png" alt="" />
    </CheckoutSuccessContainer>
  )
}
