import React from 'react'

import { StyledTextInput } from './styles'

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>

export const TextInput = (props: TextInputProps) => {
  return <StyledTextInput type="text" {...props} />
}
