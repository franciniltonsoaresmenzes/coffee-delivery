import { MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Input } from '../../../../components/Input'
import { Text } from '../../../../components/Typography'
import { FlexSubtitleCheckout } from '../../styles'
import { FormAdressContainer, GridInputsFormAdress } from './styles'

export function FormAdress() {
  const { color } = useTheme()

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
        <Input type="text" placeholder="CEP" className="cep" />
        <Input type="text" placeholder="Rua" className="rua" />
        <Input type="number" placeholder="Número" className="numero" />
        <Input
          type="text"
          placeholder="Complementar"
          className="complementar"
          optional
        />
        <Input type="text" placeholder="Bairro" className="bairro" />

        <Input type="text" placeholder="Cidade" className="cidade" />
        <Input type="text" placeholder="UF" className="uf" />
      </GridInputsFormAdress>
    </FormAdressContainer>
  )
}
