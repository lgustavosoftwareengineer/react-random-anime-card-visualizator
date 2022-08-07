import React from 'react'
import Image from 'next/image'

import { Card, CardProps } from 'src/components'
import { Datum } from 'src/features/modules/domains/random-cards/requests/fetchAnimes/types'

import { Container, ContentText, Title, Header } from './styles'

export type AnimeCardProps = { anime: Datum } & Omit<CardProps, 'children'>

export const AnimeCard = ({ anime, ...props }: AnimeCardProps) => {
  return (
    <Card data-testid="card-test-id" {...props}>
      <Container>
        <Header>
          <Title>{anime.attributes.slug}</Title>
          {anime.attributes.posterImage.large && (
            <Image
              src={anime.attributes.posterImage.large ?? ''}
              alt="anime-poster-image"
              width={100}
              height={150}
            />
          )}
        </Header>
        <ContentText>{anime.attributes.description}</ContentText>
        <ContentText>{anime.id}</ContentText>
      </Container>
    </Card>
  )
}
