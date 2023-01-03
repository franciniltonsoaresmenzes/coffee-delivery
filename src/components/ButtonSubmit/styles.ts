import styled from 'styled-components'

export const ButtonSubmitContainer = styled.button`
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  width: 100%;

  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.brand.yellow};
  color: ${({ theme }) => theme.color.base.white};

  text-transform: uppercase;

  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.color.brand['yellow-dark']};
  }
`
