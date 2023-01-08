import styled from 'styled-components'
import { FormAdressContainer } from '../FormAdress/styles'

export const CoffeeSelectedContainer = styled(FormAdressContainer)`
  max-width: 28rem;
  width: 28rem;
`

export const ListCoffeeCardShop = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.base.button};
`

export const FlexPriceContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 13.5px;
  margin: 1.5rem 0;
`

export const FlexPrice = styled.div`
  display: flex;
  justify-content: space-between;
`
