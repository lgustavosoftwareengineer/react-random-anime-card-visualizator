import styled from 'styled-components'
import { EmptyHorizontalSeparatorProp } from './types'

export const StyledEmptySeparator = styled.div<EmptyHorizontalSeparatorProp>`
  width: ${(props) => props.width}px;
`
