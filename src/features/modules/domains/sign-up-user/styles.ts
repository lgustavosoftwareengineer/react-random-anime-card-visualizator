import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
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

export const WelcomeText = styled.p`
  font-size: 24px;
  text-align: center;
`
