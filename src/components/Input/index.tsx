import { InputHTMLAttributes, forwardRef } from 'react'
import { InputContainer, MesageError, OptionalInput } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  optional?: boolean
  className?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, optional, className, ...props }, ref) => {
    return (
      <InputContainer className={className}>
        {error ? <MesageError>* {error}</MesageError> : null}
        <input {...props} ref={ref} />

        {optional ? (
          <OptionalInput as="span" size="m" color="label">
            Opcional
          </OptionalInput>
        ) : null}
      </InputContainer>
    )
  },
)
