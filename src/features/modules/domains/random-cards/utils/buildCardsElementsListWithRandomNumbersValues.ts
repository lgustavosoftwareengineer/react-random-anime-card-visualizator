import { generateRandomNumber } from './generateRandomNumber'

export const buildCardsElementsListWithRandomNumbersValues = () => {
  return Array.from({
    length: 5,
  }).map(() => generateRandomNumber())
}
