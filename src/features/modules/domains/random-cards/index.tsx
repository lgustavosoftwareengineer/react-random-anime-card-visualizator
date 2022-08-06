import React from 'react'
import useSWR from 'swr'

import { fetchAnimes } from './requests'
import { Card, CardContainer, LoadingIndicator } from './styles'

const CARDS_ELEMENTS = Array.from({ length: 5 }).map(() =>
  Math.round(Math.random() * 110),
)

export const RandomCards = () => {
  const { data, error } = useSWR(['getAnimes'], fetchAnimes)
  const isLoading = !error && !data

  console.log({ data })

  return (
    <div>
      {CARDS_ELEMENTS.map((element, index) => {
        return (
          <Card key={String(index) + element}>
            <CardContainer>
              {isLoading ? (
                <LoadingIndicator data-testid="loading-activity-test-id" />
              ) : (
                <p>{element}</p>
              )}
            </CardContainer>
          </Card>
        )
      })}
    </div>
  )
}
