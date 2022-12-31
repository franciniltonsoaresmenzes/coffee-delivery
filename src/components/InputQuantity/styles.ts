import styled from 'styled-components'

export const InputQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.base.button};

  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;

  gap: 4px;

  input {
    background: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    text-align: center;
    color: ${({ theme }) => theme.color.base.title};

    width: 100%;

    border: 0;
  }

  button {
    border: 0;
    background: none;
    color: ${({ theme }) => theme.color.brand.purple};

    &:hover {
      color: ${({ theme }) => theme.color.brand['purple-dark']};
    }
  }
`
