import { ReactNode } from 'react'
import { Text } from '../Typography'
import { ButtonSubmitContainer } from './styles'

interface ButtonSubmitProps {
  children: ReactNode | string
}

export function ButtonSubmit({ children }: ButtonSubmitProps) {
  return (
    <ButtonSubmitContainer>
      <Text as="span" size="s" color="white" weight="700">
        {children}
      </Text>
    </ButtonSubmitContainer>
  )
}
