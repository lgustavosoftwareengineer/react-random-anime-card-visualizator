import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Button, LoadingIndicator } from 'src/components'
import { useUser } from 'src/shared'

import { AnimeCardsList } from './components'
import { shuffleList } from './utils'
import {
  AnimeResponseLinks,
  AnimeResponseMeta,
  Datum,
} from './requests/fetchAnimes/types'
import {
  Main,
  ButtonsContainer,
  EmptySeparator,
  Header,
  UserName,
} from './styles'
import { useCards } from './hooks'

const CLICK_ADD_MORE_CARD_BUTTON_TIMES_AMOUNT_LIMIT = 3

export type AnimeByIdResponse = {
  data: Datum[]
  meta: AnimeResponseMeta
  links: AnimeResponseLinks
}

export const RandomCards = () => {
  const { user } = useUser()
  const { replace } = useRouter()

  const { cards, isLoading, setCards, shuffledAnimes } = useCards()

  const [
    numberOfTimesTheUserClickedOnTheAddMoreCardsButton,
    setNumberOfTimesTheUserClickedOnTheAddMoreCardsButton,
  ] = useState(0)

  const shouldClickToAddMoreCardButtonBeDisabled =
    numberOfTimesTheUserClickedOnTheAddMoreCardsButton ===
    CLICK_ADD_MORE_CARD_BUTTON_TIMES_AMOUNT_LIMIT

  const onClickAddOneMoreCard = () => {
    const [firstShuffledAnimes] = shuffledAnimes

    setCards((prevState) => [...prevState, firstShuffledAnimes])

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
      {isLoading ? <LoadingIndicator /> : <AnimeCardsList cards={cards} />}
      <ButtonsContainer>
        <Button
          value={
            shouldClickToAddMoreCardButtonBeDisabled
              ? 'Limite atingido (3x)'
              : 'Puxar uma nova carta aleatoriamente'
          }
          onClick={onClickAddOneMoreCard}
          disabled={isLoading || shouldClickToAddMoreCardButtonBeDisabled}
        />
        <EmptySeparator />
        <Button
          value="Embaralhar cartas"
          onClick={onClickShuffleCards}
          disabled={isLoading}
        />
      </ButtonsContainer>
    </Main>
  )
}
