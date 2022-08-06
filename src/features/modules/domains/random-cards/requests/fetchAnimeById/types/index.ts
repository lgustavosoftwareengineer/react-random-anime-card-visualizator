export type AnimeByIdResponse = {
  data: Datum
  meta: AnimeResponseMeta
  links: AnimeResponseLinks
}

export type Datum = {
  id: string
  type: string
  links: DatumLinks
  attributes: Attributes
  relationships: { [key: string]: Relationship }
}

export type Attributes = {
  createdAt: Date
  updatedAt: Date
  slug: string
  synopsis: string
  description: string
  coverImageTopOffset: number
  titles: Titles
  canonicalTitle: string
  abbreviatedTitles: string[]
  averageRating: string
  ratingFrequencies: { [key: string]: string }
  userCount: number
  favoritesCount: number
  startDate: Date
  endDate: Date
  nextRelease: null
  popularityRank: number
  ratingRank: number
  ageRating: string
  ageRatingGuide: string
  subtype: string
  status: string
  tba: null
  posterImage: PosterImage
  coverImage: CoverImage
  episodeCount: number
  episodeLength: number
  totalLength: number
  youtubeVideoId: string
  showType: string
  nsfw: boolean
}

export type CoverImage = {
  tiny: string
  large: string
  small: string
  original: string
  meta: CoverImageMeta
}

export type CoverImageMeta = {
  dimensions: Dimensions
}

export type Dimensions = {
  tiny: Large
  large: Large
  small: Large
  medium?: Large
}

export type Large = {
  width: number
  height: number
}

export type PosterImage = {
  tiny: string
  large: string
  small: string
  medium: string
  original: string
  meta: CoverImageMeta
}

export type Titles = {
  en: string
  en_jp: string
  ja_jp: string
}

export type DatumLinks = {
  self: string
}

export type Relationship = {
  links: RelationshipLinks
}

export type RelationshipLinks = {
  self: string
  related: string
}

export type AnimeResponseLinks = {
  first: string
  next: string
  last: string
}

export type AnimeResponseMeta = {
  count: number
}
