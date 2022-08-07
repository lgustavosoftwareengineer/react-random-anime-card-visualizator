import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import { Theme } from 'src/styles'

export type ThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <StyledComponentsThemeProvider theme={Theme}>
      {children}
    </StyledComponentsThemeProvider>
  )
}
