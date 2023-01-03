import { Text } from '../Typography'
import { ButtonSubmitContainer } from './styles'

export function ButtonSubmit() {
  return (
    <ButtonSubmitContainer>
      <Text as="span" size="s" color="white" weight="700">
        confirmar pedido
      </Text>
    </ButtonSubmitContainer>
  )
}
