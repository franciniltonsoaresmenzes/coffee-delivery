import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { InputQuantityContainer } from './styles'

export function InputQuanity() {
  const [addOrRemoveQuantity, setAddOrRemoveQuantity] = useState(1)

  function handleAddQuantity() {
    if (addOrRemoveQuantity < 26) {
      setAddOrRemoveQuantity(addOrRemoveQuantity + 1)
    }
  }

  function handleRemoveQuantity() {
    if (addOrRemoveQuantity > 1) {
      setAddOrRemoveQuantity(addOrRemoveQuantity - 1)
    }
  }

  return (
    <InputQuantityContainer>
      <button onClick={handleRemoveQuantity}>
        <Minus size={14} weight="fill" />
      </button>
      <input type="text" value={addOrRemoveQuantity} disabled />
      <button onClick={handleAddQuantity}>
        <Plus size={14} weight="fill" />
      </button>
    </InputQuantityContainer>
  )
}
