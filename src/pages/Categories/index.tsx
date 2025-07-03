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
      <ProductsList games={actionGames} title="Ação" background="black" />
      <ProductsList games={asportGames} title="Esportes" background="gray" />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
      />
      <ProductsList games={fightGames} title="Luta" background="gray" />
      <ProductsList games={rpgGames} title="RPG" background="black" />
    </>
  )
}

export default Categories
