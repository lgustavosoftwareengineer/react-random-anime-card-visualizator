import { useEffect, useMemo, useState } from 'react'
import useSWR from 'swr'

import { fetchAnimes } from '../requests'
import { Datum } from '../requests/fetchAnimes/types'
import { shuffleList } from '../utils'

export const useCards = () => {
  const { data: response, error } = useSWR('animes', fetchAnimes)
  const isLoading = !error && !response
  const { data } = response ?? {}
  const { data: animes } = data ?? {}

  const shuffledAnimes = useMemo(() => shuffleList(animes ?? []), [animes])
  const [cards, setCards] = useState<Datum[]>([])

  useEffect(() => {
    if (cards.length > 0) {
      return
    }

    const firstFiveElementsFromAnimes = shuffledAnimes.slice(0, 5)

    setCards(firstFiveElementsFromAnimes)
  }, [shuffledAnimes])

  return {
    cards,
    setCards,
    shuffledAnimes,
    isLoading,
  }
}
