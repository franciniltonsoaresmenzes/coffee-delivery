import { v4 as uuidv4 } from 'uuid'

interface Coffee {
  id: string
  nameCoffee: string
  description: string
  image: string
  value: number
  quantity: number
}

export const Coffees: Coffee[] = [
  {
    id: uuidv4(),
    nameCoffee: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: '/expresso-americano.png',
    value: 9.9,
    quantity: 1,
  },
]
