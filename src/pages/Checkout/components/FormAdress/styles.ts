import styled from 'styled-components'
import { FormCardContainer } from '../../styles'

export const FormAdressContainer = styled(FormCardContainer)`
  max-width: 40rem;
`

export const GridInputsFormAdress = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  grid-template-rows: repeat(4, 1fr);
  row-gap: 1rem;
  column-gap: 0.75rem;

  .cep {
    grid-column: 1/1;
    grid-row: 1;
  }

  .rua {
    grid-column: 1/4;
    grid-row: 2;
    text-transform: uppercase;
  }

  .numero {
    grid-column: 1/1;
    grid-row: 3;
  }

  .complementar {
    grid-column: 2/4;
    grid-row: 3;
  }

  .bairro {
    grid-column: 1/1;
    grid-row: 4;
  }

  .cidade {
    grid-column: 2/2;
    grid-row: 4;
  }

  .uf {
    grid-column: 3/3;
    grid-row: 4;
  }
`
