import React from 'react'
import { StyledEmptySeparator } from './style'
import { EmptyHorizontalSeparatorProp } from './types'

export const EmptyHorizontalSeparator = (
  props: EmptyHorizontalSeparatorProp,
) => {
  return <StyledEmptySeparator {...props} />
}
