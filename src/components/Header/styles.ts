import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1132px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  padding: 3rem 12px;

  div {
    display: flex;
    gap: 12px;
  }
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  border: 0;
  border-radius: 8px;

  ${({ theme, variant }) => css`
    background-color: ${theme.color.brand[`${variant}--light`]};
    color: ${theme.color.brand[`${variant}--dark`]};
    svg {
      color: ${variant === 'yellow' && theme.color.brand['yellow--dark']};
    }
  `}
`
