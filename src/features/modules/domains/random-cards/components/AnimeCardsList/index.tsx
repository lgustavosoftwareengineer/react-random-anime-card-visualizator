import React from 'react'
import { EmptyHorizontalSeparator } from 'src/components'
import { Datum } from '../../requests/fetchAnimes/types'
import { generateRandomNumber } from '../../utils'

import { AnimeCard } from './components'
import { ListContainer } from './style'

const LIST_SEPARATOR_WIDTH = 20

const renderCard = (element: Datum, _: number, list: Datum[]) => {
  const isLastElement = list[list.length - 1].id === element.id
  const randomNumber = generateRandomNumber()

  return (
    <React.Fragment key={String(element.id + randomNumber)}>
      <AnimeCard randomElementId={element} />
      {!isLastElement && (
        <EmptyHorizontalSeparator width={LIST_SEPARATOR_WIDTH} />
      )}
    </React.Fragment>
  )
}

export type AnimeCardsListProps = {
  cards: Datum[]
}

export const AnimeCardsList = ({ cards }: AnimeCardsListProps) => {
  return <ListContainer>{cards.map(renderCard)}</ListContainer>
}
