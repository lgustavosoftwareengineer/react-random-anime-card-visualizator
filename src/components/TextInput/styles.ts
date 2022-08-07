import styled from 'styled-components'

import { InputCSS } from '../styles'

export const StyledTextInput = styled.input`
  ${InputCSS};
  border: 1px solid #${({ theme }) => theme.colors.text};
`
