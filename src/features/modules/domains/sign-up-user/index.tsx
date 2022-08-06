import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useUser } from 'src/shared'
import { Card } from 'src/components'

import { CardContent, Main, TextInput, Button } from './styles'

export const SignUpUser = () => {
  const [userName, setUserName] = useState('')
  const { setUser } = useUser()
  const { push } = useRouter()

  const isUserNameDefined = Boolean(userName.length)

  const onClickGoToRandomCardsPage = () => {
    setUser({ name: userName })
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
            value={userName}
            onChange={({ target }) => setUserName(target.value)}
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
