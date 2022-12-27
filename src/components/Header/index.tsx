import logoCoffeeDelivery from '../../../public/logo-coffee-delivery.svg'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderButton, HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <div>
        <HeaderButton variant="purple">
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </HeaderButton>

        <NavLink to="/checkout">
          <HeaderButton variant="yellow">
            <ShoppingCart size={22} weight="fill" />
          </HeaderButton>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
