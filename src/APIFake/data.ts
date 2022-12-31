import { v4 as uuidv4 } from 'uuid'

export const coffees = [
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    image: '/expresso-americano.png',
    price: 9.9,
    quantity: 1,
  },
]
