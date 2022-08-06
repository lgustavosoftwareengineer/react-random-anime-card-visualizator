import React from 'react'
import { EmptyHorizontalSeparator } from 'src/components'
import { AnimeCard } from './components'

import { ListContainer } from './style'

const LIST_SEPARATOR_WIDTH = 20

const renderCard = (element: number, _: any, list: number[]) => {
  const isLastElement = list[list.length - 1] === element

  return (
    <React.Fragment key={String(element)}>
      <AnimeCard randomElementId={element} />
      {!isLastElement && (
        <EmptyHorizontalSeparator width={LIST_SEPARATOR_WIDTH} />
      )}
    </React.Fragment>
  )
}

export type AnimeCardsListProps = {
  cards: number[]
}

export const AnimeCardsList = ({ cards }: AnimeCardsListProps) => {
  return <ListContainer>{cards.map(renderCard)}</ListContainer>
}
