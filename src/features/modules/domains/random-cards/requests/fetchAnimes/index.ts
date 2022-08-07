import { Api } from 'src/services/api'

import { AnimeResponse } from './types'

export const fetchAnimes = () => Api.get<AnimeResponse>('anime')
