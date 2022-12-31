import { useTheme } from 'styled-components'

import { ShoppingCart } from 'phosphor-react'

import { HeaderButton } from '../Header/styles'
import {
  CardCoffeeContainer,
  FlexInputCoffee,
  SubtitleCoffee,
  TagCoffee,
  TextCoffee,
} from './styles'
import { InputQuanity } from '../InputQuantity'

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
        <span>
          R$ <span>9,90</span>
        </span>
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
