import React from 'react'
import { screen, render } from '@testing-library/react'
import { RandomCards } from '..'

describe('RandomCards', () => {
  it('should show 5 spinners when cards is still loading', () => {
    render(<RandomCards />)

    const loadingIndicators = screen.getAllByTestId('loading-activity-test-id')

    expect(loadingIndicators).toHaveLength(5)
  })
  it.todo('should show 5 when cards is still loaded with success')
  it.todo(
    "should add a new card in the end from the 5 cards when user click in 'Puxar uma nova carta aleatoriamente' button",
  )
  it.todo(
    'should the new card added be shown with a spinner when it is still loading',
  )
  it.todo(
    "should the 'Puxar uma nova carta aleatoriamente' button be disabled when user already clicked three times in it",
  )
  it.todo(
    "should cards order be swapped when user click in 'Embaralhar cartas' button",
  )
})
