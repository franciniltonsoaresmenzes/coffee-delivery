import styled from 'styled-components'
import { Subtitle } from '../../../../components/Typography'
import background from '../../../../assets/Background.png'

export const BannerSection = styled.section`
  > div {
    display: flex;
    padding-top: 1rem;
    padding-bottom: 6.75rem;
  }
  background: ${() => `url(${background})`} no-repeat center;
  img {
    pointer-events: none;
  }
`

export const SubtitleBanner = styled(Subtitle)``

export const BannerGridInfo = styled.div`
  margin-top: 6rem;
  max-width: 567px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  row-gap: 20px;
`
