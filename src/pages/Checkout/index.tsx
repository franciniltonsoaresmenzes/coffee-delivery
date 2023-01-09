import { CoffeeSelected } from './components/CoffeeSelected'
import { FormAdress } from './components/FormAdress'
import { InputPayments } from './components/InputPayments'
import {
  CheckoutContainer,
  CheckoutContainerFlex,
  TitleChekout,
} from './styles'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeShopContext } from '../../contexts/CoffeeShopProvider'

enum paymentMethods {
  credito = 'credito',
  debito = 'debito',
  dinheiro = 'dinheiro',
}

const setBuyNewCoffee = zod.object({
  c: zod
    .string()
    .min(1, 'Informe o cep corretamente')
    .max(26, 'CEP muito grande'),
  street: zod
    .string()
    .min(1, 'Rua invalida')
    .max(40, 'Você pode ser mais direto'),
  number: zod.string().min(1, 'Numero invalido').max(26, 'Numero muito grande'),
  complementary: zod.string(),
  district: zod
    .string()
    .min(1, 'Preciso de mais informações')
    .max(40, 'Você pode ser mais direto'),
  city: zod
    .string()
    .min(1, 'Preciso de mais informações')
    .max(40, 'Você pode ser mais direto'),
  state: zod.string().min(1, 'UF invalido').max(2, 'Você pode ser mais direto'),
  paymentMethod: zod.nativeEnum(paymentMethods, {
    errorMap: () => {
      return { message: 'Informe Forma de pagamento' }
    },
  }),
})

export type BuyNewCoffee = zod.infer<typeof setBuyNewCoffee>

export function Checkout() {
  const newCoffee = useForm<BuyNewCoffee>({
    resolver: zodResolver(setBuyNewCoffee),
  })

  const { clearItemCoffeeShopCart } = useContext(CoffeeShopContext)
  const { handleSubmit } = newCoffee

  const navigate = useNavigate()

  function CreateNewCoffee(data: BuyNewCoffee) {
    clearItemCoffeeShopCart()
    navigate('/checkout/success', {
      state: data,
    })
  }

  return (
    <CheckoutContainer
      className="container"
      action=""
      onSubmit={handleSubmit(CreateNewCoffee)}
    >
      <FormProvider {...newCoffee}>
        <CheckoutContainerFlex>
          <div>
            <TitleChekout size="x-s" weight={700}>
              Complete seu pedido
            </TitleChekout>
            <FormAdress />
            <InputPayments />
          </div>
          <div>
            <TitleChekout size="x-s" weight={700}>
              Cafés selecionados
            </TitleChekout>
            <CoffeeSelected />
          </div>
        </CheckoutContainerFlex>
      </FormProvider>
    </CheckoutContainer>
  )
}
