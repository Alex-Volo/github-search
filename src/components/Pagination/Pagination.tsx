import { useMemo, type FC } from 'react'
import * as S from './styles'
import { getPaginationArr } from 'utils'
import type { ISearchUserQueryParams } from 'types'

interface IPaginationProps {
  currentPage: number
  totalCount: number
  returnSearchParams: (value: ISearchUserQueryParams) => void
}

export const Pagination: FC<IPaginationProps> = ({ currentPage = 1, totalCount = 1, returnSearchParams }) => {
  const usersPerPage = 30
  const lastPageIndex = Math.ceil(totalCount / usersPerPage)
  const currentPages = useMemo(() => getPaginationArr(currentPage, lastPageIndex), [currentPage, lastPageIndex])

  const pageElements = currentPages.map((page) =>
    page === currentPage ? (
      <S.ActivePage key={page + 'page'}>{page}</S.ActivePage>
    ) : (
      <S.Page
        key={page + 'page'}
        onClick={() => {
          returnSearchParams({ page, enabled: true } as ISearchUserQueryParams)
        }}
      >
        {page}
      </S.Page>
    )
  )
  return (
    <S.Box>
      {currentPage !== 1 && (
        <S.Page
          onClick={() => {
            returnSearchParams({ page: currentPage - 1, enabled: true } as ISearchUserQueryParams)
          }}
        >
          <S.Arrow>&#9668;</S.Arrow>
        </S.Page>
      )}
      {pageElements}
      {currentPage !== lastPageIndex && (
        <S.Page
          onClick={() => {
            returnSearchParams({ page: currentPage + 1, enabled: true } as ISearchUserQueryParams)
          }}
        >
          <S.Arrow>&#9658;</S.Arrow>
        </S.Page>
      )}
    </S.Box>
  )
}
