import { ShoppingCart } from 'phosphor-react'

import coffeDeliveryBanner from '../../../../assets/coffe-banner.png'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { Subtitle, Title } from '../../../../components/Typography'

import { BannerGridInfo, BannerSection } from './styles'

export function Banner() {
  return (
    <BannerSection>
      <div>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Subtitle size="s" color="subtitle" as="h3">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Subtitle>

        <BannerGridInfo>
          <InfoWithIcon
            icon={<ShoppingCart size={16} weight="fill" />}
            description="Compra simples e segura"
          />
        </BannerGridInfo>
      </div>
      <div>
        <img src={coffeDeliveryBanner} alt="" />
      </div>
    </BannerSection>
  )
}
