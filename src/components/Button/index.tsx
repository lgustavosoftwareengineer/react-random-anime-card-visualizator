import React from 'react'

import { StyledButtonInput } from './styles'

export type ButtonProps = React.InputHTMLAttributes<HTMLInputElement>

export const Button = (props: ButtonProps) => {
  return <StyledButtonInput type="button" {...props} />
}
