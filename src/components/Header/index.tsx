import logoCoffeeDelivery from '../../../public/logo-coffee-delivery.svg'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderButton, HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeShopContext } from '../../contexts/CoffeeShopProvider'

export function Header() {
  const { coffee } = useContext(CoffeeShopContext)

  const ItemsShopLenght = coffee.length

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <div>
        <HeaderButton variant="purple-light">
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </HeaderButton>

        <NavLink to="/checkout">
          <HeaderButton variant="yellow-light">
            {ItemsShopLenght > 0 ? (
              <span className="items-shop-lenght">{ItemsShopLenght}</span>
            ) : null}

            <ShoppingCart size={22} weight="fill" />
          </HeaderButton>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
