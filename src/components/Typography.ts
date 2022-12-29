import styled, { css } from 'styled-components'

interface TitleProps {
  size?: 'title--x-l' | 'title--l'
  color?: string
}

export const Title = styled.h1<TitleProps>`
  font-family: 'Baloo 2', sans-serif;
  font-size: ${({ theme, size }) => theme.textSize.title[size ?? 'title--x-l']};
  font-weight: 800;
  line-height: 1.3;

  color: ${({ theme, color }) => color ?? theme.color.base.title};
`

export const SubTitle = styled.h3`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
`

interface TextProps {
  size: 's'
  color: 'subtitle'
}

export const Text = styled.h3<TextProps>`
  ${({ theme, size, color }) => css`
    font-size: ${theme.textSize.title[`title--${size}`]};
    color: ${({ theme }) => theme.color.base[color]};
  `}
  font-weight: 400;
  line-height: 1.3;
`
