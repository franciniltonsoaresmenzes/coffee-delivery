import styled from 'styled-components'
import { FormAdressContainer } from '../FormAdress/styles'

export const CoffeeSelectedContainer = styled(FormAdressContainer)`
  max-width: 28rem;
`

export const ListCoffeeCardShop = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.base.button};
`
