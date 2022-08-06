import React from 'react'
import { render } from '@testing-library/react'
import { nextRouterMock, NextRouterProvider } from 'src/mocks'
import { RandomCards } from '..'

jest.mock('src/shared/user', () => ({
  useUser: () => ({ user: { name: '' } }),
}))

describe('ShouldBackToSignUpScreenWhenUserNameIsEmpty', () => {
  const defaultRouterMocked = nextRouterMock()

  beforeEach(() => {
    render(
      <NextRouterProvider value={defaultRouterMocked}>
        <RandomCards />
      </NextRouterProvider>,
    )
  })

  test('should back to sign up screen when user name is empty', () => {
    expect(defaultRouterMocked.replace).toBeCalledWith('/')
  })
})
