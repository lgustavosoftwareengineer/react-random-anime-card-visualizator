export const buildCardsElementsListWithRandomNumbersValues = () => {
  return Array.from({
    length: 5,
  }).map(() => Math.round(Math.random() * 110))
}
