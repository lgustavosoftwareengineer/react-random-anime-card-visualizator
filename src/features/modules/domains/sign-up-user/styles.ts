import styled, { css } from 'styled-components'

export const Main = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: green;
`
export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  height: 50vh;
  width: 50vw;
  flex-direction: column;
  justify-content: center;

  input[type='text'] {
    border: 1px solid #f3f3f3;
  }
`

export const InputCSS = css`
  margin-bottom: 20px;
  border-radius: 6px;
  padding: 20px;
`

export const TextInput = styled.input`
  ${InputCSS};
`

export const Button = styled.input`
  ${InputCSS};

  background-color: #c20c33;
  font-weight: bold;
  color: #f3f3f3;
  border: none;
  transition: 0.3s;

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
