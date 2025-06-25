import Game from '../../models/Game'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            system={game.system}
            image={game.image}
            infos={['-10%', 'R$ 150']}
            title={game.title}
            description={game.description}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
