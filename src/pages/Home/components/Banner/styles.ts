import styled from 'styled-components'
import { Text } from '../../../../components/Typography'
import background from '../../../../assets/Background.png'

export const BannerSection = styled.section`
  background: ${() => `url(${background})`} no-repeat center;
  background-size: cover;

  backdrop-filter: blur(80px);

  img {
    pointer-events: none;
    max-width: 476px;
  }

  @media screen and (max-width: 800px) {
    img {
      display: block;
      margin: auto;
      width: 376px;
    }
  }

  @media screen and (max-width: 370px) {
    img {
      width: 176px;
    }
  }
`
export const BannerContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 6.75rem;
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`

export const SubtitleBanner = styled(Text)``

export const BannerGridInfo = styled.div`
  margin-top: 6rem;
  max-width: 567px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  row-gap: 20px;

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`
