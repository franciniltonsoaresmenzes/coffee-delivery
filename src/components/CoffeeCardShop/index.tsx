import { Trash } from 'phosphor-react'
import { tranformNumberInDollar } from '../../functions/transformNumberInDolar'
import { InputQuanity } from '../InputQuantity'
import { Text } from '../Typography'
import {
  ButtonTrash,
  CoffeeCardShopContainer,
  FlexInputQuantity,
} from './styles'

interface CoffeeCardShopProps {
  id?: string
  name: string
  image: string
  price: number
  quantity?: number
}

export function CoffeeCardShop({ name, image, price }: CoffeeCardShopProps) {
  return (
    <CoffeeCardShopContainer>
      <img src={`/coffees/${image}`} alt="" />
      <div>
        <Text as="span" size="m" color="subtitle">
          {name}
        </Text>
        <FlexInputQuantity>
          <InputQuanity />
          <ButtonTrash>
            <Trash size={16} />
            <Text size="x-s" color="text" weight="1.6" as="span">
              Remover
            </Text>
          </ButtonTrash>
        </FlexInputQuantity>
      </div>

      <Text as="span" size="m" color="text" weight="700">
        R$ {tranformNumberInDollar(price)}
      </Text>
    </CoffeeCardShopContainer>
  )
}
