import React from 'react'

import { Card, CardProps } from 'src/components'
import { Datum } from 'src/features/modules/domains/random-cards/requests/fetchAnimes/types'

import {
  Container,
  ContentText,
  Title,
  Header,
  CardNumber,
  CardInnerContainer,
  CardContainer,
  AnimePosterImage,
} from './styles'
import { Theme } from 'src/styles'

export type AnimeCardProps = { anime: Datum } & Omit<CardProps, 'children'>

export const AnimeCard = ({ anime, ...props }: AnimeCardProps) => {
  return (
    <CardContainer>
      <Card data-testid="card-test-id" {...props}>
        <Container>
          <CardNumber alignment="start" color={Theme.colors.primary}>
            {anime.id}
          </CardNumber>
          <CardInnerContainer>
            <Header>
              <Title>{anime.attributes.slug}</Title>
              {anime.attributes.posterImage.large && (
                <AnimePosterImage
                  src={anime.attributes.posterImage.large ?? ''}
                  alt="anime-poster-image"
                  width={10}
                  height={10}
                  layout="responsive"
                />
              )}
            </Header>
            <ContentText>{anime.attributes.description}</ContentText>
          </CardInnerContainer>
          <CardNumber alignment="end">{anime.id}</CardNumber>
        </Container>
      </Card>
    </CardContainer>
  )
}
