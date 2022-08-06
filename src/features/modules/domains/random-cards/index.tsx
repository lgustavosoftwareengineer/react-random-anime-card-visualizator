import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import { Button } from 'src/components'
import { useUser } from 'src/shared'
import { AnimeCard } from './components'

import {
  Main,
  CardsListContainer,
  ButtonsContainer,
  EmptySeparator,
  Header,
  UserName,
} from './styles'
import { buildCardsElementsListWithRandomNumbersValues } from './utils'

const CARDS_ELEMENTS = buildCardsElementsListWithRandomNumbersValues()
const CLICK_ADD_MORE_CARD_BUTTON_TIMES_AMOUNT_LIMIT = 3

export const RandomCards = () => {
  const { user } = useUser()
  const { replace } = useRouter()

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
      <CardsListContainer>
        {cards.map((element, _, list) => {
          const isLastElement = list[list.length - 1] === element

          return (
            <Fragment key={String(element)}>
              <AnimeCard randomElementId={element} />
              {!isLastElement && <EmptySeparator />}
            </Fragment>
          )
        })}
      </CardsListContainer>
      <ButtonsContainer>
        <Button
          value={
            shouldClickAddMoreCardButtonBeDisabled
              ? 'Limite atingido (3x)'
              : 'Puxar uma nova carta aleatoriamente'
          }
          onClick={onClickAddOneMoreCard}
          disabled={shouldClickAddMoreCardButtonBeDisabled}
        />
        <EmptySeparator />
        <Button value="Embaralhar cartas" onClick={onClickShuffleCards} />
      </ButtonsContainer>
    </Main>
  )
}
