import React from 'react'
import { useRouter } from 'next/router'

import { useUser } from 'src/shared'
import { Card, Button, TextInput } from 'src/components'

import { CardContent, Main, WelcomeText, Title } from './styles'

export const SignUpUser = () => {
  const { push } = useRouter()
  const { user, setUser } = useUser()
  const { name } = user

  const isUserNameDefined = Boolean(name.length)

  const onClickGoToRandomCardsPage = () => {
    push('/cards')
  }

  return (
    <Main>
      <Card>
        <CardContent>
          <Title>
            <WelcomeText>Seja bem-vindo(a) </WelcomeText> ao{' '}
            <b>react-random-anime-card-visualizator</b>
            <br /> <br /> Adicione seu nome logo a baixo para começar o jogo! :)
          </Title>
          <TextInput
            name="user-name-input"
            placeholder="Digite aqui o seu nome"
            value={name}
            onChange={({ target }) => setUser({ name: target.value })}
          />
          <Button
            value="Clicar para ver cartas"
            disabled={!isUserNameDefined}
            onClick={onClickGoToRandomCardsPage}
          />
        </CardContent>
      </Card>
    </Main>
  )
}
