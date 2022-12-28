import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

import coffeDeliveryBanner from '../../../../assets/coffe-banner.png'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { Title } from '../../../../components/Typography'

import { BannerGridInfo, BannerSection, SubtitleBanner } from './styles'

export function Banner() {
  const { color } = useTheme()
  return (
    <BannerSection>
      <div className="container">
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <SubtitleBanner size="s" color="subtitle" as="h3">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SubtitleBanner>

          <BannerGridInfo>
            <InfoWithIcon
              icon={<ShoppingCart size={16} weight="fill" />}
              description="Compra simples e segura"
              colorIcon={color.brand['yellow--dark']}
            />

            <InfoWithIcon
              icon={<Package size={16} weight="fill" />}
              description="Embalagem mantém o café intacto"
              colorIcon={color.base.text}
            />

            <InfoWithIcon
              icon={<Timer size={16} weight="fill" />}
              description="Entrega rápida e rastreada"
              colorIcon={color.brand.yellow}
            />

            <InfoWithIcon
              icon={<Coffee size={16} weight="fill" />}
              description="O café chega fresquinho até você"
              colorIcon={color.brand.purple}
            />
          </BannerGridInfo>
        </div>
        <div>
          <img src={coffeDeliveryBanner} alt="" />
        </div>
      </div>
    </BannerSection>
  )
}
