import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.co/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nostrum
      placeat ipsum doloremque iste aliquid debitis necessitatibus, dolores
      incidunt numquam culpa, deleniti expedita recusandae vero inventore
      laborum, hic nobis. Magni.
    </Descricao>
  </Card>
)

export default Product
