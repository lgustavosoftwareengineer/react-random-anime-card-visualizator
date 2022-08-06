import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useUser } from 'src/shared'

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
    <div>
      <input
        type="text"
        name="user-name-input"
        placeholder="Digite aqui o seu nome"
        value={userName}
        onChange={({ target }) => setUserName(target.value)}
      />
      <input
        type="button"
        value="Clicar para ver cartas"
        disabled={!isUserNameDefined}
        onClick={onClickGoToRandomCardsPage}
      />
    </div>
  )
}
