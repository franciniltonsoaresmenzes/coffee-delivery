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
import { tranformNumberInDollar } from '../../functions/transformNumberInDolar'

interface Coffee {
  id: string
  name: string
  description: string
  tags: string[]
  image: string
  price: number
  quantity: number
}

interface CoffeeProps {
  data: Coffee
}

export function CardCoffee({ data }: CoffeeProps) {
  const { color } = useTheme()

  return (
    <CardCoffeeContainer>
      <img src={`/coffees/${data.image}`} alt="" />
      <div>
        {data.tags.map((tag) => (
          <TagCoffee key={tag}>{tag}</TagCoffee>
        ))}
      </div>
      <SubtitleCoffee weight="700" color={color.base.subtitle}>
        {data.name}
      </SubtitleCoffee>
      <TextCoffee color="label">{data.description}</TextCoffee>
      <FlexInputCoffee>
        <ValueCoffee>
          <DollarSign as="span" color="text" size="s">
            R$
          </DollarSign>
          <Title as="span" color={color.base.text}>
            {tranformNumberInDollar(data.price)}
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
