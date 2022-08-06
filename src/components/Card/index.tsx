import React from 'react'

import { CardContainer, CardContent } from './styles'

export type CardProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <CardContainer {...props}>
      <CardContent>{children}</CardContent>
    </CardContainer>
  )
}
