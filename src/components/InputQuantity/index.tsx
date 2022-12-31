import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { InputQuantityContainer } from './styles'

export function InputQuanity() {
  const [quantity, setQuantity] = useState(1)

  function handleAddQuantity() {
    if (quantity < 26) {
      setQuantity(quantity + 1)
    }
  }

  function handleRemoveQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <InputQuantityContainer>
      <button onClick={handleRemoveQuantity}>
        <Minus size={14} weight="fill" />
      </button>
      <input type="text" value={quantity} disabled />
      <button onClick={handleAddQuantity}>
        <Plus size={14} weight="fill" />
      </button>
    </InputQuantityContainer>
  )
}
