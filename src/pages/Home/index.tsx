import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import starWars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import resident from '../../assets/images/resident.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Star Wars Jedi Survivor',
    category: 'Ação',
    system: 'Playstation 4',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['-10%', 'R$ 150'],
    image: starWars
  },
  {
    id: 2,
    title: 'Star Wars Jedi Survivor',
    category: 'Ação',
    system: 'Playstation 4',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['-10%', 'R$ 150'],
    image: starWars
  },
  {
    id: 3,
    title: 'Star Wars Jedi Survivor',
    category: 'Ação',
    system: 'Playstation 4',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['-10%', 'R$ 150'],
    image: starWars
  },
  {
    id: 4,
    title: 'Diablo IV',
    category: 'Ação',
    system: 'Playstation 4',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['-10%', 'R$ 150'],
    image: diablo
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    title: 'Legend of Zelda: Breath of the Wild',
    category: 'Aventura',
    system: 'Nintendo Switch',
    description:
      'Legend of Zelda: Breath of the Wild é um jogo de aventura desenvolvido pela...',
    infos: ['-10%', 'R$ 150'],
    image: zelda
  },
  {
    id: 6,
    title: 'Star Wars Jedi Survivor',
    category: 'Ação',
    system: 'Playstation 4',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['-10%', 'R$ 150'],
    image: starWars
  },
  {
    id: 7,
    title: 'Resident Evil 2 Remake',
    category: 'Ação',
    system: 'Playstation 4',
    description:
      'Resident Evil 2 Remake é um jogo de ação e aventura desenvolvido pela Capcom...',
    infos: ['-10%', 'R$ 150'],
    image: resident
  },
  {
    id: 8,
    title: 'Star Wars Jedi Survivor',
    category: 'Ação',
    system: 'Playstation 4',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['-10%', 'R$ 150'],
    image: starWars
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
