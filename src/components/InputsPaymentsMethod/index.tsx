import { forwardRef, ReactNode } from 'react'
import { Text } from '../Typography'
import {
  Input,
  InputPaymentMetohdContainer,
  MessageErrorInputPayment,
} from './styles'
import { useFormContext } from 'react-hook-form'

type InputPaymentMetohdProps = {
  label?: string
  tipo?: string
  icon?: ReactNode
  error?: string
}

export const InputPaymentMetohd = forwardRef<
  HTMLInputElement,
  InputPaymentMetohdProps
>(({ label, icon, tipo, error }, ref) => {
  const { register } = useFormContext()
  return (
    <>
      <Input
        id={tipo}
        type="radio"
        value={tipo}
        idLabel={tipo}
        ref={ref}
        {...register('paymentMethod')}
      />
      <InputPaymentMetohdContainer htmlFor={tipo} id={tipo}>
        <MessageErrorInputPayment>{error}</MessageErrorInputPayment>
        {icon}
        <Text size="x-s" color="text" lineHeight={1.6}>
          {label}
        </Text>
      </InputPaymentMetohdContainer>
    </>
  )
})
