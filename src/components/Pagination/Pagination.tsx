import { useMemo, type FC } from 'react'
import * as S from './styles'
import { getPaginationArr } from 'utils'

interface IPaginationProps {
  currentPage: number
  totalCount: number
}

export const Pagination: FC<IPaginationProps> = ({ currentPage = 1, totalCount = 1 }) => {
  const usersPerPage = 30
  const lastPageIndex = Math.ceil(totalCount / usersPerPage)
  const currentPages = useMemo(() => getPaginationArr(currentPage, lastPageIndex), [currentPage, lastPageIndex])
    const pageElements = currentPages.map((page) => <span key={page + 'page'}>{page}</span>)
  return (
    <S.Box>
     {pageElements}
    </S.Box>
  )
}
