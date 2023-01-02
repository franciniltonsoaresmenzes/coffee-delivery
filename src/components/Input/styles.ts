import styled from 'styled-components'
import { Text } from '../Typography'

export const InputContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.color.base.input};
  border: 1px solid ${({ theme }) => theme.color.base.button};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${({ theme }) => theme.color.base.label};

  &:focus-within {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.brand['yellow-dark']};
  }
  input {
    width: 100%;
    height: 100%;
    padding: 12px;

    background-color: transparent;
    border: 0;
  }
`

export const OptionalInput = styled(Text)`
  font-style: italic;
  margin-right: 12px;
`

export const MesageError = styled.span`
  position: absolute;
  top: -1rem;
  color: red;
`
