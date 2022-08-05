import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { SeeRandomDogsCards } from '../random-dogs-cards'

describe('SeeRandomDogsCards', () => {
  it("should return a component with 'SeeRandomDogsCards' text", () => {
    render(<SeeRandomDogsCards />)

    expect(screen.getByRole('title')).toHaveTextContent('SeeRandomDogsCards')
  })
})
