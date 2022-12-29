import styled from 'styled-components'
import { Text } from '../../../../components/Typography'
import background from '../../../../assets/Background.png'

export const BannerSection = styled.section`
  background: ${() => `url(${background})`} no-repeat center;
  background-size: cover;

  backdrop-filter: blur(80px);

  img {
    pointer-events: none;
  }
`
export const BannerContainer = styled.div`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 6.75rem;
`

export const SubtitleBanner = styled(Text)``

export const BannerGridInfo = styled.div`
  margin-top: 6rem;
  max-width: 567px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  row-gap: 20px;
`
