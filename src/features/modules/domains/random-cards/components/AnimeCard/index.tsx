import Image from 'next/image'
import React from 'react'
import { Card, LoadingIndicator, CardProps } from 'src/components'
import useSWR from 'swr'
import { fetchAnimeById } from '../../requests'

import {
  Container,
  ContentText,
  Title,
  Header,
  LoadingContainer,
} from './styles'

export type AnimeCardProps = { randomElementId: number } & Omit<
  CardProps,
  'children'
>

export const AnimeCard = ({ randomElementId, ...props }: AnimeCardProps) => {
  const { data: response, error } = useSWR(
    `getAnimeById@${randomElementId}`,
    () => fetchAnimeById(randomElementId),
  )

  const isLoading = !error && !response

  if (isLoading) {
    return (
      <Card data-testid="card-test-id" {...props}>
        <LoadingContainer>
          <LoadingIndicator />
        </LoadingContainer>
      </Card>
    )
  }

  const { data: dataFromResponse } = response ?? {}

  const { data: animeDetails } = dataFromResponse ?? {}

  return (
    <Card data-testid="card-test-id" {...props}>
      <Container>
        <Header>
          <Title>{animeDetails?.attributes.slug}</Title>
          {animeDetails?.attributes.posterImage.large && (
            <Image
              src={animeDetails?.attributes.posterImage.large ?? ''}
              alt="anime-poster-image"
              width={100}
              height={150}
            />
          )}
        </Header>
        <ContentText>{animeDetails?.attributes.description}</ContentText>
        <ContentText>{randomElementId}</ContentText>
      </Container>
    </Card>
  )
}
