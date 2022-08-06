import React from 'react'
import { useRouter } from 'next/router'
import { useUser } from 'src/shared'
import { Card } from 'src/components'

import { CardContent, Main, TextInput, Button } from './styles'

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
          <p>
            Seja bem-vindo(a) ao <b>react-random-anime-card-visualizator</b>
            <br /> Adicione seu nome logo a baixo para começar
          </p>
          <TextInput
            type="text"
            name="user-name-input"
            placeholder="Digite aqui o seu nome"
            value={name}
            onChange={({ target }) => setUser({ name: target.value })}
          />
          <Button
            type="button"
            value="Clicar para ver cartas"
            disabled={!isUserNameDefined}
            onClick={onClickGoToRandomCardsPage}
          />
        </CardContent>
      </Card>
    </Main>
  )
}
