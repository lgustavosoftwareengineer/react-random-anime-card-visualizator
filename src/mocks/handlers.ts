import { rest } from 'msw'
import { animesResponseMock } from 'src/features/modules/domains/random-cards/mocks'

const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? ''

const requestUrl = `${NEXT_PUBLIC_API_BASE_URL}anime`

export const handlers = [
  rest.get(requestUrl, (req, res, ctx) => {
    return res(ctx.json(animesResponseMock))
  }),
]
