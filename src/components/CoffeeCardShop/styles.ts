import styled from 'styled-components'

export const CoffeeCardShopContainer = styled.section`
  max-width: 23rem;
  padding: 0.5rem 0.25rem;

  display: flex;
  justify-content: space-between;

  gap: 1.25rem;

  img {
    width: 4.25rem;
    height: 4.25rem;
  }
`

export const FlexInputQuantity = styled.div`
  margin-top: 0.5rem;

  display: flex;
  gap: 0.5rem;
`
export const ButtonTrash = styled.button`
  padding: 0.5rem;
  text-transform: uppercase;
  border-radius: 6px;

  display: flex;
  gap: 0.25rem;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.color.brand.purple};
  }
`

