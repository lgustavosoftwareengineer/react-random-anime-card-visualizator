import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: green;
`

export const CardsListContainer = styled.div`
  display: flex;
  flex: 2;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: red;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: blue;

  input {
    flex: 1;
    height: 80px;
  }
`

export const EmptySeparator = styled.div`
  width: 1.4vw;
`
