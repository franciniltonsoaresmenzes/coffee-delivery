import { Minus, Plus } from 'phosphor-react'
import { InputQuantityContainer } from './styles'

interface InputQuanityProps {
  quantity: number
  addQuantity: () => void
  removeQuanity: () => void
}

export function InputQuanity({
  quantity,
  addQuantity,
  removeQuanity,
}: InputQuanityProps) {
  return (
    <InputQuantityContainer>
      <button onClick={removeQuanity} type="button">
        <Minus size={14} weight="fill" />
      </button>
      <input type="text" value={quantity} disabled />
      <button onClick={addQuantity} type="button">
        <Plus size={14} weight="fill" />
      </button>
    </InputQuantityContainer>
  )
}
