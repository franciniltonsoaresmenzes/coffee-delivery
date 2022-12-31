import { Minus, Plus } from 'phosphor-react'
import { InputQuantityContainer } from './styles'

export function InputQuanity() {
  return (
    <InputQuantityContainer>
      <button>
        <Minus size={14} weight="fill" />
      </button>
      <input type="text" value="1" disabled />
      <button>
        <Plus size={14} weight="fill" />
      </button>
    </InputQuantityContainer>
  )
}
