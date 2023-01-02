import { ReactNode } from 'react'
import { Text } from '../Typography'
import { Input, InputPaymentMetohdContainer } from './styles'

interface InputPaymentMetohdProps {
  label: string
  tipo: string
  icon: ReactNode
}

export function InputPaymentMetohd({
  label,
  icon,
  tipo,
}: InputPaymentMetohdProps) {
  return (
    <>
      <Input
        name="paymentMethod"
        id={tipo}
        type="radio"
        value={tipo}
        idLabel={tipo}
      />
      <InputPaymentMetohdContainer htmlFor={tipo} id={tipo}>
        {icon}
        <Text size="x-s" color="text" lineHeight={1.6}>
          {label}
        </Text>
      </InputPaymentMetohdContainer>
    </>
  )
}
