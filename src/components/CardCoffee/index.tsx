import { useTheme } from 'styled-components'

import { ShoppingCart } from 'phosphor-react'

import { HeaderButton } from '../Header/styles'
import {
  CardCoffeeContainer,
  DollarSign,
  FlexInputCoffee,
  SubtitleCoffee,
  TagCoffee,
  TextCoffee,
  ValueCoffee,
} from './styles'
import { InputQuanity } from '../InputQuantity'
import { Title } from '../Typography'

export function CardCoffee() {
  const { color } = useTheme()
  return (
    <CardCoffeeContainer>
      <img src="/coffees/expresso-tradicional.png" alt="" />
      <TagCoffee>Tradicional</TagCoffee>
      <SubtitleCoffee weight="700" color={color.base.subtitle}>
        Expresso Tradicional
      </SubtitleCoffee>
      <TextCoffee color="label">
        O tradicional café feito com água quente e grãos moídos
      </TextCoffee>
      <FlexInputCoffee>
        <ValueCoffee>
          <DollarSign as="span" color="text" size="s">
            R$
          </DollarSign>
          <Title as="span" color={color.base.text}>
            9,90
          </Title>
        </ValueCoffee>
        <div>
          <InputQuanity />
          <HeaderButton variant="purple-dark">
            <ShoppingCart size={22} weight="fill" />
          </HeaderButton>
        </div>
      </FlexInputCoffee>
    </CardCoffeeContainer>
  )
}
