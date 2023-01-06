import { CoffeeCardShop } from '../../../../components/CoffeeCardShop'
import {
  CoffeeSelectedContainer,
  FlexPrice,
  FlexPriceContainer,
  ListCoffeeCardShop,
} from './styles'
import { ButtonSubmit } from '../../../../components/ButtonSubmit'
import { Text } from '../../../../components/Typography'
import { useContext } from 'react'
import { CoffeeShopContext } from '../../../../contexts/CoffeeShopProvider'

import { tranformNumberInDollar } from '../../../../functions/transformNumberInDolar'

export function CoffeeSelected() {
  const { coffee } = useContext(CoffeeShopContext)

  const ItemsShopLenght = coffee.reduce(
    (acumulador, currentValue) => currentValue.quantity + acumulador,
    0,
  )

  const taxaDeEntregas = 3.9

  return (
    <>
      {coffee.length > 0 ? (
        <CoffeeSelectedContainer>
          {coffee.map((coffee) => (
            <ListCoffeeCardShop key={coffee.id}>
              <CoffeeCardShop key={coffee.id} coffee={coffee} />
            </ListCoffeeCardShop>
          ))}
          <FlexPriceContainer>
            <FlexPrice>
              <Text as="span" size="s" color="text">
                Total de itens
              </Text>
              <Text as="span" size="s" color="text">
                {ItemsShopLenght}
              </Text>
            </FlexPrice>

            <FlexPrice>
              <Text as="span" size="s" color="text">
                Entrega
              </Text>
              <Text as="span" size="s" color="text">
                R$ {tranformNumberInDollar(taxaDeEntregas)}
              </Text>
            </FlexPrice>

            <FlexPrice>
              <Text as="span" size="l" color="subtitle" weight="700">
                Total
              </Text>
              <Text as="span" size="l" color="subtitle" weight="700">
                R${' '}
                {tranformNumberInDollar(
                  coffee.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.price,
                    0,
                  ) *
                    ItemsShopLenght +
                    taxaDeEntregas,
                )}
              </Text>
            </FlexPrice>
          </FlexPriceContainer>

          <ButtonSubmit>confirmar pedido</ButtonSubmit>
        </CoffeeSelectedContainer>
      ) : null}
    </>
  )
}
