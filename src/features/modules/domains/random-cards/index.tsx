import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Button } from 'src/components'
import { useUser } from 'src/shared'

import { AnimeCardsList } from './components'

import {
  Main,
  ButtonsContainer,
  EmptySeparator,
  Header,
  UserName,
} from './styles'
import {
  buildCardsElementsListWithRandomNumbersValues,
  generateRandomNumber,
  shuffleList,
} from './utils'

const INITIAL_CARDS_ELEMENTS = buildCardsElementsListWithRandomNumbersValues()
const CLICK_ADD_MORE_CARD_BUTTON_TIMES_AMOUNT_LIMIT = 3

export const RandomCards = () => {
  const { user } = useUser()
  const { replace } = useRouter()

  const [cards, setCards] = useState(INITIAL_CARDS_ELEMENTS)
  const [
    numberOfTimesTheUserClickedOnTheAddMoreCardsButton,
    setNumberOfTimesTheUserClickedOnTheAddMoreCardsButton,
  ] = useState(0)

  const shouldClickToAddMoreCardButtonBeDisabled =
    numberOfTimesTheUserClickedOnTheAddMoreCardsButton ===
    CLICK_ADD_MORE_CARD_BUTTON_TIMES_AMOUNT_LIMIT

  const onClickAddOneMoreCard = () => {
    const generateNewRandomNumber = generateRandomNumber()

    setCards((prevState) => [...prevState, generateNewRandomNumber])
    setNumberOfTimesTheUserClickedOnTheAddMoreCardsButton(
      (prevState) => ++prevState,
    )
  }

  const onClickShuffleCards = () => {
    setCards((prevState) => [...shuffleList(prevState)])
  }

  useEffect(() => {
    if (!user.name) {
      replace('/')
    }
  }, [user.name, replace])

  return (
    <Main>
      <Header>
        <UserName data-testid="user-name-test-id">{user.name}</UserName>
      </Header>
      <AnimeCardsList cards={cards} />
      <ButtonsContainer>
        <Button
          value={
            shouldClickToAddMoreCardButtonBeDisabled
              ? 'Limite atingido (3x)'
              : 'Puxar uma nova carta aleatoriamente'
          }
          onClick={onClickAddOneMoreCard}
          disabled={shouldClickToAddMoreCardButtonBeDisabled}
        />
        <EmptySeparator />
        <Button value="Embaralhar cartas" onClick={onClickShuffleCards} />
      </ButtonsContainer>
    </Main>
  )
}
