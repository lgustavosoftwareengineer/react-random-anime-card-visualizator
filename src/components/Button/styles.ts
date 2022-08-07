import styled from 'styled-components'
import { InputCSS } from '../styles'

export const StyledButtonInput = styled.input`
  ${InputCSS};

  background-color: #c20c33;
  font-weight: bold;
  color: #f3f3f3;
  border: none;
  transition: 0.3s;
  min-width: 50px;

  &:hover,
  &:enabled {
    cursor: pointer;
  }

  &:disabled {
    color: #f3f3f380;
    background-color: #c20c3380;
    cursor: auto;
  }
`
