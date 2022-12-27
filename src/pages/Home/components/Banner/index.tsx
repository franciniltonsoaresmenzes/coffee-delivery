import { ShoppingCart } from 'phosphor-react'

import coffeDeliveryBanner from '../../../../assets/coffe-banner.png'

import { BannerGridInfo, BannerIngo, BannerSection } from './styles'

export function Banner() {
  return (
    <BannerSection>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>

        <BannerGridInfo>
          <BannerIngo>
            <ShoppingCart size={16} weight="fill" />
            Compra simples e segura
          </BannerIngo>
          <BannerIngo>
            <ShoppingCart size={16} weight="fill" />
            Compra simples e segura
          </BannerIngo>
          <BannerIngo>
            <ShoppingCart size={16} weight="fill" />
            Compra simples e segura
          </BannerIngo>
          <BannerIngo>
            <ShoppingCart size={16} weight="fill" />
            Compra simples e segura
          </BannerIngo>
        </BannerGridInfo>
      </div>
      <div>
        <img src={coffeDeliveryBanner} alt="" />
      </div>
    </BannerSection>
  )
}
