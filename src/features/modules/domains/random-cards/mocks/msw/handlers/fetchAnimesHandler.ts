import { rest } from 'msw'

import { NEXT_PUBLIC_API_BASE_URL } from 'src/services/api'

import { animesResponseStub } from '../stubs/animesResponseStub'

const animeRequestUrl = `${NEXT_PUBLIC_API_BASE_URL}anime`

export const successResponseFetchAnimes = rest.get(
  animeRequestUrl,
  (req, res, ctx) => {
    return res(ctx.json(animesResponseStub))
  },
)

export const emptyResponseFetchAnimes = rest.get(
  animeRequestUrl,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}))
  },
)
