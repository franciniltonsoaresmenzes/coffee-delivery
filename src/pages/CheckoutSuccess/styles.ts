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

export const BorderGradient = styled.div`
  margin-top: 2.5rem;
  background: linear-gradient(90deg, #dbac2c, #8047f8);
  padding: 2px;
  border-radius: 7px 37px;

  overflow: hidden;
`

export const CardInfo = styled.section`
  padding: 2.5rem;
  border-radius: 7px 37px;

  height: 100%;

  background-color: ${({ theme }) => theme.color.base.background};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`
