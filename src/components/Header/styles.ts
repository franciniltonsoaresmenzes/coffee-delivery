import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1140px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  padding: 3rem 10px;

  div {
    display: flex;
    gap: 12px;
  }
`

interface HeaderButtonProps {
  variant: 'purple-light' | 'yellow-light' | 'purple-dark'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 0.5rem;

  border: 0;
  border-radius: 8px;
  ${({ theme, variant }) => css`
    background-color: ${theme.color.brand[variant]};
  `}

  ${({ theme, variant }) => css`
    color: ${variant === 'purple-dark' && theme.color.base.white};
    color: ${variant === 'yellow-light' && theme.color.brand['yellow-dark']};
  `}

  ${({ theme, variant }) => css`
    color: ${variant === 'purple-light' && theme.color.brand['purple-dark']};
    svg {
      color: ${variant === 'purple-light' && theme.color.brand.purple};
    }
  `}

  transition: .2s;

  &:hover {
    ${({ theme, variant }) => css`
      background-color: ${variant === 'purple-dark' &&
      theme.color.brand.purple};
    `}
  }

  .items-shop-lenght {
    width: 20px;
    height: 20px;
    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.color.brand['yellow-dark']};
    color: ${({ theme }) => theme.color.base.white};

    font-size: ${({ theme }) => theme.textSize.text['title--x-s']};
    line-height: 1.3;
    font-weight: 700;

    position: absolute;
    top: -7.5px;
    right: -6px;
  }
`
