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

interface SubTitleProps {
  size?: 'title--l' | 'title--m' | 'title--s' | 'title--x-s'
  color?: string
  weight?: string
}
export const SubTitle = styled.h3<SubTitleProps>`
  font-family: 'Baloo 2';
  font-weight: ${({ weight }) => weight ?? '800'};
  font-size: ${({ theme, size }) => theme.textSize.text[size ?? 'title--l']};
  line-height: 130%;

  color: ${({ theme, color }) => color ?? theme.color.base.title};
`

interface TextProps {
  size?: 's' | 'l'
  color?: 'subtitle' | 'label'
  weight?: string
}

export const Text = styled.p<TextProps>`
  ${({ theme, size, color }) => css`
    font-size: ${theme.textSize.text[`title--${size ?? 's'}`]};
    color: ${({ theme }) => theme.color.base[color ?? 'subtitle']};
  `}
  font-weight: ${({ weight }) => weight ?? '400'};
  line-height: 1.3;
`
