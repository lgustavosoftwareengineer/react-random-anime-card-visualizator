import React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'

export type NextRouterProviderProps = {
  value: NextRouter
  children: React.ReactNode
}

export const NextRouterProvider = ({
  value,
  children,
}: NextRouterProviderProps) => (
  <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
)
