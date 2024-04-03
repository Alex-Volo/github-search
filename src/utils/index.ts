export const getPaginationArr = (currentPage: number, totalPages: number): number[] => {
  if (totalPages < 2) return [1]
  const firstPageIndex = 1
  //   Пагинация состоит из первой страницы, самой последней страницы
  // Посередине массив с активной страницей и соседними (2-штуки)
  // Переменная обозначает сколько страниц слева и справа от центральной страницы пагинации
  const neighboursCount = 2
  let firstIndex = 0
  let lastIndex = totalPages - 1
  //   Если страниц меньше 7-ми (первая, два соседа слева, центральная, два соседа справа, последняя)
  if (totalPages <= neighboursCount * 2 + 3) {
    firstIndex = 2
    lastIndex = totalPages - 1
  }
  // страниц точно больше 7-ми значит первый индекс возможен лишь в двух вариантах
  // если текущая страница находится в диапазоне от 1 до 3
  else if (currentPage - (neighboursCount + 1) <= 0) {
    firstIndex = 2
    lastIndex = neighboursCount * 2 + 2
  }
  // текущая страница точно находится в диапазоне от 4-х до последней страницы
  // если текущая страница находится в диапазоне последних трех страниц (соседи + последняя)
  else if (currentPage + neighboursCount >= totalPages) {
    firstIndex = totalPages - (neighboursCount * 2 + 1)
    lastIndex = totalPages - 1
  }
  // текущая страница где-то в середние диапазона и достаточно удалена от крайних точек
  else {
    firstIndex = currentPage - neighboursCount
    lastIndex = currentPage + neighboursCount
  }

  const middleArr: number[] = []

  for (let i = firstIndex; i <= lastIndex; i++) {
    middleArr.push(i)
  }

  return [firstPageIndex, ...middleArr, totalPages]
}
