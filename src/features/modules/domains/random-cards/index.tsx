import React, { useState } from 'react'
import { AnimeCard } from './components'

import { Main, CardsListContainer } from './styles'
import { buildCardsElementsListWithRandomNumbersValues } from './utils'

const CARDS_ELEMENTS = buildCardsElementsListWithRandomNumbersValues()
const CLICK_ADD_MORE_CARD_BUTTON_TIMES_AMOUNT_LIMIT = 3

export const RandomCards = () => {
  const [cards, setCards] = useState(CARDS_ELEMENTS)
  const [clickAddMoreCardTimeAmount, setClickAddMoreCardTimeAmount] =
    useState(0)

  const shouldClickAddMoreCardButtonBeDisabled =
    clickAddMoreCardTimeAmount === CLICK_ADD_MORE_CARD_BUTTON_TIMES_AMOUNT_LIMIT

  const onClickAddOneMoreCard = () => {
    const generateNewRandomNumber = Math.round(Math.random() * 110)

    setCards((prevState) => [...prevState, generateNewRandomNumber])
    setClickAddMoreCardTimeAmount((prevState) => ++prevState)
  }

  const onClickShuffleCards = () => {
    setCards((prevState) => [...prevState.sort(() => Math.random() - 0.5)])
  }

  return (
    <Main>
      <CardsListContainer>
        {cards.map((element) => (
          <AnimeCard randomElementId={element} key={element} />
        ))}
      </CardsListContainer>
      <input
        type="button"
        value={
          shouldClickAddMoreCardButtonBeDisabled
            ? 'Limite atingido (3x)'
            : 'Puxar uma nova carta aleatoriamente'
        }
        onClick={onClickAddOneMoreCard}
        disabled={shouldClickAddMoreCardButtonBeDisabled}
      />
      <input
        type="button"
        value="Embaralhar cartas"
        onClick={onClickShuffleCards}
      />
    </Main>
  )
}
