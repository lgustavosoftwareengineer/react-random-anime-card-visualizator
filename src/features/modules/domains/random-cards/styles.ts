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

export const ButtonsContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  flex: 1;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
  background-color: transparent;
`

export const EmptySeparator = styled.div`
  width: 20px;
`
export const Header = styled.header`
  display: flex;
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`

export const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 68px;
`
