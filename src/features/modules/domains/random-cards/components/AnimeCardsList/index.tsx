import React from 'react'
import { nanoid } from 'nanoid'

import { Datum } from '../../requests/fetchAnimes/types'

import { AnimeCard } from './components'
import { ListContainer } from './style'

const renderCard = (anime: Datum) => {
  const id = nanoid()

  return (
    <React.Fragment key={id}>
      <AnimeCard anime={anime} />
    </React.Fragment>
  )
}

export type AnimeCardsListProps = {
  cards: Datum[]
}

export const AnimeCardsList = ({ cards }: AnimeCardsListProps) => {
  return <ListContainer>{cards.map(renderCard)}</ListContainer>
}
