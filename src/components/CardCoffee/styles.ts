import styled from 'styled-components'
import { SubTitle, Text } from '../Typography'

export const CardCoffeeContainer = styled.div`
  background-color: ${({ theme }) => theme.color.base.card};
  width: 256px;
  padding: 20px;
  border-radius: 6px 36px;

  display: flex;
  align-items: center;
  flex-direction: column;

  text-align: center;

  > div {
    display: flex;
    gap: 0.25rem;
  }
  img {
    display: block;
    margin-top: -60px;
    margin-right: auto;
    margin-left: auto;
    pointer-events: none;
  }
`

export const TagCoffee = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border-radius: 100px;

  font-size: 10px;
  font-weight: 700;
  line-height: 1.3;

  text-transform: uppercase;

  margin-top: 1rem;
  margin-bottom: 1.25rem;

  color: ${({ theme }) => theme.color.brand['yellow-dark']};
  background-color: ${({ theme }) => theme.color.brand['yellow-light']};
`

export const SubtitleCoffee = styled(SubTitle)`
  margin-bottom: 0.5rem;
`

export const TextCoffee = styled(Text)`
  margin-bottom: 2rem;
`

export const FlexInputCoffee = styled.div`
  display: flex;
  flex-direction: row;
  gap: 23px;

  div {
    display: flex;
    gap: 8px;
  }
`
export const ValueCoffee = styled.span``

export const DollarSign = styled(Text)`
  align-self: flex-end;
`
