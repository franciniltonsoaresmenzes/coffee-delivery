import styled from 'styled-components'
import { Title } from '../../components/Typography'

export const CheckoutContainer = styled.section``

export const FormCardContainer = styled.div`
  background-color: ${({ theme }) => theme.color.base.card};
  padding: 40px;
`

export const TitleChekout = styled(Title)`
  color: ${({ theme }) => theme.color.base.subtitle};
  margin-bottom: 1rem;
`

export const FlexSubtitleCheckout = styled.div`
  display: flex;
  gap: 0.5rem;

  margin-bottom: 2rem;

  div {
    display: flex;
    flex-direction: column;
  }
`
