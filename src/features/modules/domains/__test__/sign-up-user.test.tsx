import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { SignUpUser } from '../sign-up-user'

describe('SignUpUser', () => {
  it("should return a component with 'SignUpUser' text", () => {
    render(<SignUpUser />)

    expect(screen.getByRole('title')).toHaveTextContent('SignUpUser')
  })
})
