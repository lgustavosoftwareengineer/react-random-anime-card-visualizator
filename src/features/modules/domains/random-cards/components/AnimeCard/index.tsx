import Image from 'next/image'
import React from 'react'
import { Card, LoadingIndicator, CardProps } from 'src/components'
import useSWR from 'swr'
import { fetchAnimeById } from '../../requests'

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
    return <LoadingIndicator data-testid="loading-activity-test-id" />
  }

  const { data: dataFromResponse } = response ?? {}

  const { data: animeDetails } = dataFromResponse ?? {}

  return (
    <Card data-testid="card-test-id" {...props}>
      <p>{animeDetails?.attributes.slug}</p>
      {animeDetails?.attributes.posterImage.large && (
        <Image
          src={animeDetails?.attributes.posterImage.large ?? ''}
          alt="anime-poster-image"
          width={100}
          height={100}
        />
      )}
      <p>{animeDetails?.attributes.description}</p>
      <p>{randomElementId}</p>
    </Card>
  )
}
