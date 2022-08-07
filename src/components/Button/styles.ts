import styled from 'styled-components'
import { InputCSS } from '../styles'

export const StyledButtonInput = styled.input`
  ${InputCSS};

  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  transition: 0.3s;
  min-width: 50px;

  &:hover,
  &:enabled {
    cursor: pointer;
  }

  &:disabled {
    color: ${({ theme }) => `${theme.colors.text}80`};
    background-color: ${({ theme }) => `${theme.colors.primary}80`};
    cursor: auto;
  }
`
