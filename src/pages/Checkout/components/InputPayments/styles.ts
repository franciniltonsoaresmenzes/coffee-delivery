import styled from 'styled-components'
import { FormCardContainer } from '../../styles'

export const InputPaymentsContainer = styled(FormCardContainer)`
  max-width: 40rem;
  margin-top: 0.75rem;
`

export const InputPaymentsFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(178.67px, 1fr));
  gap: 0.75rem;
`
