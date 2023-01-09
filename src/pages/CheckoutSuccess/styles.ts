import styled from 'styled-components'

export const CheckoutSuccessContainer = styled.div`
  padding-top: 5rem;

  display: flex;
  gap: 6.735rem;

  img {
    max-width: 492px;
    max-height: 293px;
  }

  @media screen and (max-width: 1024px) {
    background: red;
    flex-direction: column-reverse;
    width: 500px;
  }
`

export const CardInfo = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem;
  border: 1px solid ${({ theme }) => theme.color.brand['yellow-dark']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`
