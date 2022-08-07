import { ResponsiveTextMediaQuery } from 'src/styles'
import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-image: url(https://lunetas.com.br/wp-content/uploads/2022/04/animes-e-criancas-portal-lunetas.jpg.webp);
`
export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  height: 100%;
  width: 50vw;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    & {
      width: 80vw;
      height: 50vh;
    }
  }
`

export const WelcomeText = styled.p`
  font-size: 1.5rem;
  text-align: center;

  ${ResponsiveTextMediaQuery}
`
