import { ResponsiveTextMediaQuery } from 'src/styles'
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
  height: 100%;
  width: 50vw;
  flex-direction: column;
  justify-content: center;
`

export const WelcomeText = styled.p`
  font-size: 1.5rem;
  text-align: center;

  ${ResponsiveTextMediaQuery}
`
