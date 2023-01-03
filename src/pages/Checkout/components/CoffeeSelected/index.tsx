import { CoffeeCardShop } from '../../../../components/CoffeeCardShop'
import {
  CoffeeSelectedContainer,
  FlexPrice,
  FlexPriceContainer,
  ListCoffeeCardShop,
} from './styles'
import { v4 as uuidv4 } from 'uuid'
import { ButtonSubmit } from '../../../../components/ButtonSubmit'

const CoffeeCard = [
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    image: '/expresso-tradicional.png',
    price: 9.9,
    quantity: 1,
  },
  {
    id: uuidv4(),
    name: 'Latte',
    image: '/latte.png',
    price: 9.9,
    quantity: 1,
  },
]
export function CoffeeSelected() {
  return (
    <CoffeeSelectedContainer>
      {CoffeeCard.map((coffee) => (
        <ListCoffeeCardShop key={coffee.id}>
          <CoffeeCardShop
            key={coffee.id}
            name={coffee.name}
            image={coffee.image}
            price={coffee.price}
            quantity={coffee.quantity}
          />
        </ListCoffeeCardShop>
      ))}
      <FlexPriceContainer>
        <FlexPrice>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </FlexPrice>

        <FlexPrice>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </FlexPrice>

        <FlexPrice>
          <span>Total</span>
          <span>R$ 33,20</span>
        </FlexPrice>
      </FlexPriceContainer>

      <ButtonSubmit />
    </CoffeeSelectedContainer>
  )
}
