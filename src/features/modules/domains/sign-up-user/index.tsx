import React, { useState } from 'react'
import { useRouter } from 'next/router'

export const SignUpUser = () => {
  const [userName, setUserName] = useState('')
  const { push } = useRouter()

  const isUserNameDefined = Boolean(userName.length)

  const onClickGoToRandomDogsCardsPage = () => {
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
        onClick={onClickGoToRandomDogsCardsPage}
      />
    </div>
  )
}
