import ProductsList from '../../components/ProductsList'

import { Game } from '../Home'
import { useEffect, useState } from 'react'

import {
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: asportGames } = useGetSportsGamesQuery()

  if (
    !actionGames ||
    !fightGames ||
    !rpgGames ||
    !simulationGames ||
    !asportGames
  ) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
      />
      <ProductsList
        games={asportGames}
        title="Esportes"
        background="gray"
        id="sports"
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="gray"
        id="fight"
      />
      <ProductsList games={rpgGames} title="RPG" background="black" id="rpg" />
    </>
  )
}

export default Categories
