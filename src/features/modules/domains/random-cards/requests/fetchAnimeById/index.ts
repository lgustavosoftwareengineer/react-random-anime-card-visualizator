import { Api } from 'src/services/api'

import { AnimeByIdResponse } from './types'

export const fetchAnimeById = (id: number) =>
  Api.get<AnimeByIdResponse>(`anime/${id}`)
