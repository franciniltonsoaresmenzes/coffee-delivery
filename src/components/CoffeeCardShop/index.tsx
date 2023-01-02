import { Trash } from 'phosphor-react'
import { InputQuanity } from '../InputQuantity'
import { Text } from '../Typography'
import {
  ButtonTrash,
  CoffeeCardShopContainer,
  FlexInputQuantity,
} from './styles'

export function CoffeeCardShop() {
  return (
    <CoffeeCardShopContainer>
      <img src="/coffees/expresso-tradicional.png" alt="" />
      <div>
        <Text as="span" size="m" color="subtitle">
          Expresso Tradicional
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
        R$ 9,90
      </Text>
    </CoffeeCardShopContainer>
  )
}
