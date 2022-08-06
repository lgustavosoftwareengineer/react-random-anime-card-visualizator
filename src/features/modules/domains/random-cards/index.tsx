import Image from 'next/image'
import React, { useState } from 'react'
import useSWR from 'swr'

import { fetchAnimeById } from './requests'
import { Card, CardContainer, LoadingIndicator } from './styles'
import { buildCardsElementsListWithRandomNumbersValues } from './utils'

const CARDS_ELEMENTS = buildCardsElementsListWithRandomNumbersValues()

const CardElement = ({ randomElementId }: { randomElementId: number }) => {
  const { data: response, error } = useSWR(
    `getAnimeById@${randomElementId}`,
    () => fetchAnimeById(randomElementId),
  )

  const isLoading = !error && !response

  if (isLoading) {
    return <LoadingIndicator data-testid="loading-activity-test-id" />
  }

  const { data: dataFromResponse } = response ?? {}
  const { data: animeDetails } = dataFromResponse ?? {}

  return (
    <div data-testid="card-test-id">
      <p>{animeDetails?.attributes.slug}</p>
      <p>{randomElementId}</p>
      {animeDetails?.attributes.posterImage.large && (
        <Image
          src={animeDetails?.attributes.posterImage.large ?? ''}
          alt="anime-poster-image"
          width={100}
          height={100}
        />
      )}
    </div>
  )
}

export const RandomCards = () => {
  const [cards, setCards] = useState(CARDS_ELEMENTS)
  const [clickAddMoreCardTimeAmount, setClickAddMoreCardTimeAmount] =
    useState(0)

  const CLICK_ADD_MORE_CARD_BUTTON_TIMES_AMOUNT_LIMIT = 3

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
    <div>
      {cards.map((element) => (
        <Card key={element}>
          <CardContainer>
            <CardElement randomElementId={element} />
          </CardContainer>
        </Card>
      ))}
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
    </div>
  )
}
