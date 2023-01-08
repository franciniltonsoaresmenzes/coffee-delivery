import styled, { css } from 'styled-components'

export const InputPaymentMetohdContainer = styled.label`
  width: 178.67px;
  position: relative;

  display: flex;
  gap: 0.75rem;
  align-items: center;

  background-color: ${({ theme }) => theme.color.base.button};

  border-radius: 6px;
  padding: 1rem;

  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.color.base.hover};
  }

  svg {
    color: ${({ theme }) => theme.color.brand.purple};
  }
`
interface InputProps {
  idLabel: string
}

export const Input = styled.input<InputProps>`
  visibility: hidden;
  appearance: none;
  position: absolute;
  ${({ idLabel }) => css`
    &:checked ~ label#${idLabel} {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.color.brand.purple};
    }
  `}
`

export const MessageErrorInputPayment = styled.span`
  position: absolute;
  pointer-events: none;
  top: -1rem;
  color: red;
  font-size: 10px;
`
