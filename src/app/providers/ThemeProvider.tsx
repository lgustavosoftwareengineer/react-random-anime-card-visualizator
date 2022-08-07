import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

export type ThemeProviderProps = {
  children: React.ReactNode
}

const theme = {
  colors: {
    primary: '#c20c33',
    onPrimary: '#f3f3f3',
  },
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  )
}
