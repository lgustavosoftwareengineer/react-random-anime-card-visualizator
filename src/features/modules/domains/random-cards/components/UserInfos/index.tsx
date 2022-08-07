import React from 'react'
import { Container, Avatar, Name } from './styles'

export type UserInfosProps = {
  userName: string
}

export const UserInfos = ({ userName }: UserInfosProps) => {
  return (
    <Container>
      <Name data-testid="user-name-test-id">{userName}</Name>
      <Avatar
        src={`https://robohash.org/${userName}.png`}
        height={50}
        width={50}
      />
    </Container>
  )
}
