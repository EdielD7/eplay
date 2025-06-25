import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          system="PS4"
          image="https://placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
          title="Marvel's Spider-Man: Miles Morales PS4 & PS5"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia."
        />
        <Product
          category="Ação"
          system="PS4"
          image="https://placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
          title="Marvel's Spider-Man: Miles Morales PS4 & PS5"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia."
        />
        <Product
          category="Ação"
          system="PS4"
          image="https://placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
          title="Marvel's Spider-Man: Miles Morales PS4 & PS5"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia."
        />
        <Product
          category="Ação"
          system="PS4"
          image="https://placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
          title="Marvel's Spider-Man: Miles Morales PS4 & PS5"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia."
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
