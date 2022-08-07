import React, { Fragment } from 'react'
import type { AppProps } from 'next/app'

import { ThemeProvider } from './providers/ThemeProvider'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Fragment>
        <Component {...pageProps} />
      </Fragment>
    </ThemeProvider>
  )
}

export default MyApp
