import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { Text } from '../Typography'
import {
  InputPaymentMetohdContainer,
  InputPaymentMetohdContent,
  MessageErrorInputPayment,
} from './styles'

type InputPaymentMetohdProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  tipo?: string
  icon?: ReactNode
  error?: string
}

const InputPaymentMetohd = forwardRef<
  HTMLInputElement,
  InputPaymentMetohdProps
>(({ label, tipo, icon, error, ...props }, ref) => {
  return (
    <InputPaymentMetohdContent>
      <input id={tipo} type="radio" value={tipo} ref={ref} {...props} />
      <InputPaymentMetohdContainer htmlFor={tipo} id={tipo}>
        <MessageErrorInputPayment>{error}</MessageErrorInputPayment>
        {icon}
        <Text size="x-s" color="text" lineHeight={1.6}>
          {label}
        </Text>
      </InputPaymentMetohdContainer>
    </InputPaymentMetohdContent>
  )
})
InputPaymentMetohd.displayName = 'InputPaymentMetohd'

export default InputPaymentMetohd
