import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import { nextRouterMock, NextRouterProvider } from 'src/mocks'

import { SignUpUser } from '..'

describe('SignUpUser', () => {
  const defaultRouterMocked = nextRouterMock()
  const SignUpUserWithRouterContextProvider = () => (
    <NextRouterProvider value={defaultRouterMocked}>
      <SignUpUser />
    </NextRouterProvider>
  )

  it("should 'Clicar para ver cartas' button be disabled when user name input be empty", () => {
    render(<SignUpUserWithRouterContextProvider />)
    const nameTextInput = screen.getByPlaceholderText('Digite aqui o seu nome')
    const clickToSeeCardsButton = screen.getByDisplayValue(
      'Clicar para ver cartas',
    )

    expect(nameTextInput).toHaveValue('')
    expect(clickToSeeCardsButton).toBeDisabled()
  })

  it("should 'Clicar para ver cartas' button be enabled when user name input have content", () => {
    render(<SignUpUserWithRouterContextProvider />)
    const nameTextInput = screen.getByPlaceholderText('Digite aqui o seu nome')
    const clickToSeeCardsButton = screen.getByDisplayValue(
      'Clicar para ver cartas',
    )

    fireEvent.change(nameTextInput, { target: { value: 'Testing user' } })

    expect(nameTextInput).toHaveValue('Testing user')
    expect(clickToSeeCardsButton).toBeEnabled()
  })

  it("should go to random dogs cards page when click in 'Clicar para ver cartas' button", () => {
    render(<SignUpUserWithRouterContextProvider />)
    const nameTextInput = screen.getByPlaceholderText('Digite aqui o seu nome')
    const clickToSeeCardsButton = screen.getByDisplayValue(
      'Clicar para ver cartas',
    )

    fireEvent.change(nameTextInput, { target: { value: 'Testing user' } })
    fireEvent.click(clickToSeeCardsButton)

    expect(defaultRouterMocked.push).toBeCalledWith('/cards')
  })
})
