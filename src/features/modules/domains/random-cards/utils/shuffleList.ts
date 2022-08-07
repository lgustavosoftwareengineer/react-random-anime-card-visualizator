export const shuffleList = (list: any[]) => {
  const lastElementIndex = list.length - 1

  for (let currentIndex = lastElementIndex; currentIndex > 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1))

    const temp = list[currentIndex]
    list[currentIndex] = list[randomIndex]
    list[randomIndex] = temp
  }

  return list
}
