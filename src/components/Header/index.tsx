import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="eplay" />
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categories</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart>
      0 - Produtos
      <img src={carrinho} alt="" />
    </LinkCart>
  </HeaderBar>
)

export default Header
