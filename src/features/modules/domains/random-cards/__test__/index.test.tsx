import React from 'react'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import nock from 'nock'

import { nextRouterMock, NextRouterProvider } from 'src/mocks'

import { RandomCards } from '..'

jest.mock('../utils/buildCardsElementsListWithRandomNumbersValues.ts', () => {
  return {
    buildCardsElementsListWithRandomNumbersValues: () => [1, 2, 3, 4, 5],
  }
})

jest.mock('src/shared/user', () => ({
  useUser: () => ({ user: { name: 'Testing user' } }),
}))

const nockFetchAnimeByIdWithEmptyResponse = () => {
  return nock(NEXT_PUBLIC_API_BASE_URL)
    .get(/anime\/[0-9].*/g)
    .reply(200, {})
}

const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? ''

describe('RandomCards', () => {
  const defaultRouterMocked = nextRouterMock()

  beforeEach(() => {
    render(
      <NextRouterProvider value={defaultRouterMocked}>
        <RandomCards />
      </NextRouterProvider>,
    )
  })

  it('should show user name as "Testing user" when came to RandomCards page', () => {
    const useNameElement = screen.getByTestId('user-name-test-id')

    expect(useNameElement).toHaveTextContent('Testing user')
  })

  it('should show 5 spinners when cards is still loading', () => {
    nockFetchAnimeByIdWithEmptyResponse()

    const loadingIndicators = screen.getAllByTestId('loading-activity-test-id')

    expect(loadingIndicators).toHaveLength(5)
  })

  it('should show 5 when cards is still loaded with success', async () => {
    await waitFor(async () => {
      const cards = await screen.findAllByTestId('card-test-id')

      expect(cards).toHaveLength(5)
    })
  })

  it("should add a new card in the end from the 5 cards when user click in 'Puxar uma nova carta aleatoriamente' button", async () => {
    const getMoreCardButton = screen.getByDisplayValue(
      'Puxar uma nova carta aleatoriamente',
    )

    fireEvent.click(getMoreCardButton)

    await waitFor(async () => {
      const cards = await screen.findAllByTestId('card-test-id')
      expect(cards).toHaveLength(6)
    })
  })
  it('should the new card added be shown with a spinner when it is still loading', async () => {
    nockFetchAnimeByIdWithEmptyResponse()
    const getMoreCardButton = screen.getByDisplayValue(
      'Puxar uma nova carta aleatoriamente',
    )

    fireEvent.click(getMoreCardButton)

    await waitFor(async () => {
      const loadingIndicators = await screen.findAllByTestId(
        'loading-activity-test-id',
      )
      expect(loadingIndicators).toHaveLength(1)
    })
  })
  it("should the 'Puxar uma nova carta aleatoriamente' button be disabled when user already clicked three times in it", () => {
    const getMoreCardButton = screen.getByDisplayValue(
      'Puxar uma nova carta aleatoriamente',
    )

    fireEvent.click(getMoreCardButton)
    fireEvent.click(getMoreCardButton)
    fireEvent.click(getMoreCardButton)

    expect(getMoreCardButton).toBeDisabled()
  })

  it("should the 'Puxar uma nova carta aleatoriamente' button display value be 'Limite atingido (3x)' when user already clicked three times in it", () => {
    const getMoreCardButton = screen.getByDisplayValue(
      'Puxar uma nova carta aleatoriamente',
    )

    fireEvent.click(getMoreCardButton)
    fireEvent.click(getMoreCardButton)
    fireEvent.click(getMoreCardButton)

    expect(getMoreCardButton).toHaveDisplayValue('Limite atingido (3x)')
  })

  it("should cards order be swapped when user click in 'Embaralhar cartas' button", async () => {
    const cardsBeforeShuffle = await screen.findAllByTestId('card-test-id')
    const shuffleCardsButton = screen.getByDisplayValue('Embaralhar cartas')

    fireEvent.click(shuffleCardsButton)
    const cardsAfterShuffle = await screen.findAllByTestId('card-test-id')

    expect(cardsBeforeShuffle).not.toEqual(cardsAfterShuffle)
  })
})
