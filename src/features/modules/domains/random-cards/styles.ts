import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
`

export const CardsListContainer = styled.div`
  display: flex;
  flex: 2;
  max-width: 100vw;
  overflow-x: auto;
  padding: 40px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const EmptySeparator = styled.div`
  width: 20px;
`
export const Header = styled.header`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: flex-end;
`

export const UserName = styled.p`
  font-weight: bold;
`
