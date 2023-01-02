import { CoffeeCardShop } from '../../../../components/CoffeeCardShop'
import { CoffeeSelectedContainer, ListCoffeeCardShop } from './styles'
import { v4 as uuidv4 } from 'uuid'

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
    </CoffeeSelectedContainer>
  )
}
