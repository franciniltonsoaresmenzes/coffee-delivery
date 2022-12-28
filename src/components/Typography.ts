import styled, { css } from 'styled-components'

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: ${({ theme }) => theme.textSize.title['title--x-l']};
  font-weight: 800;
  line-height: 1.3;

  color: ${({ theme }) => theme.color.base.title};
`

interface SubtitleProps {
  size: 's'
  color: 'subtitle'
}

export const Subtitle = styled.h3<SubtitleProps>`
  ${({ theme, size, color }) => css`
    font-size: ${theme.textSize.title[`title--${size}`]};
    color: ${({ theme }) => theme.color.base[color]};
  `}
  font-weight: 400;
  line-height: 1.3;
`
