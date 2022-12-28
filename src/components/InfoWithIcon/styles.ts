import styled from 'styled-components'

interface InfoWithIconContainerProps {
  variant: string
}

export const InfoWithIconContainer = styled.div<InfoWithIconContainerProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    background-color: ${({ variant }) => variant};
    border-radius: 100%;
    padding: 8px;

    color: ${({ theme }) => theme.color.base.white};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
