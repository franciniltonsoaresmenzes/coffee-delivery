import { Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CoffeeShopContext } from '../../contexts/CoffeeShopProvider'
import { tranformNumberInDollar } from '../../functions/transformNumberInDolar'
import { CoffeeContext } from '../../reduces/coffee/reduce'
import { InputQuanity } from '../InputQuantity'
import { Text } from '../Typography'
import {
  ButtonTrash,
  CoffeeCardShopContainer,
  FlexInputQuantity,
} from './styles'

interface CoffeeCardShopProps {
  coffee: CoffeeContext
}

export function CoffeeCardShop({ coffee }: CoffeeCardShopProps) {
  const [addOrRemoveQuantity, setAddOrRemoveQuantity] = useState(
    coffee.quantity,
  )
  const { removeCoffeShopCart, addCoffeeShopCart } =
    useContext(CoffeeShopContext)

  function handleAddQuantity() {
    if (addOrRemoveQuantity < 26) {
      setAddOrRemoveQuantity(addOrRemoveQuantity + 1)
      addCoffeeShopCart(coffee)
    }
  }

  function handleRemoveQuantity() {
    if (addOrRemoveQuantity > 1) {
      setAddOrRemoveQuantity(addOrRemoveQuantity - 1)
    }
  }

  function handleRemoveCoffeeShop(idCoffee: string) {
    removeCoffeShopCart(idCoffee)
  }

  return (
    <CoffeeCardShopContainer>
      <img src={`/coffees/${coffee.image}`} alt="" />
      <div>
        <Text as="span" size="m" color="subtitle">
          {coffee.name}
        </Text>
        <FlexInputQuantity>
          <InputQuanity
            quantity={addOrRemoveQuantity}
            addQuantity={handleAddQuantity}
            removeQuanity={handleRemoveQuantity}
          />
          <ButtonTrash
            type="button"
            onClick={() => handleRemoveCoffeeShop(coffee.id)}
          >
            <Trash size={16} />
            <Text size="x-s" color="text" weight="1.6" as="span">
              Remover
            </Text>
          </ButtonTrash>
        </FlexInputQuantity>
      </div>

      <Text as="span" size="m" color="text" weight="700">
        R$ {tranformNumberInDollar(coffee.price)}
      </Text>
    </CoffeeCardShopContainer>
  )
}
