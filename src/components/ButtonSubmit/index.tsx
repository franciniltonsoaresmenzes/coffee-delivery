import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Text } from '../Typography'
import { ButtonSubmitContainer } from './styles'

interface ButtonSubmitProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string
}

export function ButtonSubmit({ children, ...props }: ButtonSubmitProps) {
  return (
    <ButtonSubmitContainer {...props}>
      <Text as="span" size="s" color="white" weight="700">
        {children}
      </Text>
    </ButtonSubmitContainer>
  )
}
