import { MapPin } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { Input } from '../../../../components/Input'
import { Text } from '../../../../components/Typography'
import { FlexSubtitleCheckout } from '../../styles'
import { FormAdressContainer, GridInputsFormAdress } from './styles'

export interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function FormAdress() {
  const { color } = useTheme()
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <FormAdressContainer>
      <FlexSubtitleCheckout>
        <MapPin size={22} color={color.brand['yellow-dark']} />
        <div>
          <Text size="m" color="subtitle" as="h3">
            Endereço de Entrega
          </Text>
          <Text size="s" color="text" as="span">
            Informe o endereço onde deseja receber seu pedido
          </Text>
        </div>
      </FlexSubtitleCheckout>

      <GridInputsFormAdress>
        <Input
          type="number"
          placeholder="CEP"
          className="cep"
          id="c"
          {...register('c')}
          error={errors.c?.message}
        />
        <Input
          type="text"
          placeholder="Rua"
          className="rua"
          id="street"
          {...register('street')}
          error={errors.street?.message}
        />
        <Input
          type="number"
          placeholder="Número"
          className="numero"
          id="number"
          {...register('number')}
          error={errors.number?.message}
        />
        <Input
          type="text"
          placeholder="Complementar"
          className="complementar"
          id="complementary"
          {...register('complementary')}
          error={errors.complementary?.message}
          optional
        />
        <Input
          type="text"
          placeholder="Bairro"
          className="bairro"
          {...register('district')}
          error={errors.district?.message}
          id="distryt"
        />

        <Input
          type="text"
          placeholder="Cidade"
          className="cidade"
          id="city"
          {...register('city')}
          error={errors.city?.message}
        />
        <Input
          type="text"
          placeholder="UF"
          className="uf"
          id="state"
          {...register('state')}
          error={errors.state?.message}
        />
      </GridInputsFormAdress>
    </FormAdressContainer>
  )
}
