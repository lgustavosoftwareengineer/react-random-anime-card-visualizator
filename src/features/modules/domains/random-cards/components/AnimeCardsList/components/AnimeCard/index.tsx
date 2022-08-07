import React from 'react'
import Image from 'next/image'

import { Card, CardProps } from 'src/components'
import { Datum } from 'src/features/modules/domains/random-cards/requests/fetchAnimes/types'

import { Container, ContentText, Title, Header } from './styles'

export type AnimeCardProps = { randomElementId: Datum } & Omit<
  CardProps,
  'children'
>

export const AnimeCard = ({ randomElementId, ...props }: AnimeCardProps) => {
  return (
    <Card data-testid="card-test-id" {...props}>
      <Container>
        <Header>
          <Title>{randomElementId.attributes.slug}</Title>
          {randomElementId.attributes.posterImage.large && (
            <Image
              src={randomElementId.attributes.posterImage.large ?? ''}
              alt="anime-poster-image"
              width={100}
              height={150}
            />
          )}
        </Header>
        <ContentText>{randomElementId.attributes.description}</ContentText>
        <ContentText>{randomElementId.id}</ContentText>
      </Container>
    </Card>
  )
}
