import { useTheme } from 'styled-components'
import { CardCoffee } from '../../../../components/CardCoffee'
import { Title } from '../../../../components/Typography'
import { ListCoffeContainer, ListCoffeSectionGrid } from './styles'

export function ListCoffe() {
  const { color } = useTheme()
  return (
    <ListCoffeContainer className="container">
      <Title size="l" color={color.base.subtitle}>
        Nossos cafés
      </Title>
      <ListCoffeSectionGrid>
        <CardCoffee />
      </ListCoffeSectionGrid>
    </ListCoffeContainer>
  )
}
