import { InputHTMLAttributes } from 'react'
import { InputContainer, MesageError, OptionalInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  optional?: boolean
  className?: string
}

export function Input({ error, optional, className, ...props }: InputProps) {
  return (
    <InputContainer className={className}>
      {error ? <MesageError>* {error}</MesageError> : null}
      <input {...props} />

      {optional ? (
        <OptionalInput as="span" size="m" color="label">
          Opcional
        </OptionalInput>
      ) : null}
    </InputContainer>
  )
}
