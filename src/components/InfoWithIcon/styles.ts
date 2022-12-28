import styled from 'styled-components'

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    background-color: ${({ theme }) => theme.color.brand['yellow--dark']};
    border-radius: 100%;
    width: 32px;
    height: 32px;

    color: ${({ theme }) => theme.color.base.white};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
