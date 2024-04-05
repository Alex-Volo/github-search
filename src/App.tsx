import { Header, SearchForm, Results, Pagination, Loader } from 'components'
import { GlobalStyle } from 'style/GlobalStyle'
import { useSearchUserQuery } from 'service/useSearchQuery'
import { useEffect, useState } from 'react'
import type { ISearchUserQueryParams, IUser } from 'types'

function App() {
  const [searchQueryParams, setSearchQueryParams] = useState<ISearchUserQueryParams>({ q: '', enabled: false })
  const { data, isFetching, isError, error } = useSearchUserQuery(searchQueryParams)
  console.log(data)
  console.log(searchQueryParams)
  const [currentUsersList, setCurrentUsersList] = useState<IUser[] | undefined>([])

  const returnSearchParams = (value: ISearchUserQueryParams) => setSearchQueryParams((prev) => ({ ...prev, ...value }))

  useEffect(() => {
    setCurrentUsersList(data?.items)
  }, [data, searchQueryParams])

  return (
    <>
      <GlobalStyle />
      <main className="main">
        <Header />

        <SearchForm returnSearchParams={returnSearchParams} />

        {data && <p className="totalCount">Всего результатов: {data.total_count}</p>}

        {data && (
          <Pagination
            currentPage={searchQueryParams.page ?? 1}
            returnSearchParams={returnSearchParams}
            totalCount={data.total_count}
          />
        )}

        {isFetching ? (
          <Loader />
        ) : isError ? (
          <p>{error instanceof Error && error.message}</p>
        ) : (
          <Results usersList={currentUsersList} />
        )}
        {/* <Loader /> */}

        {data && (
          <Pagination
            currentPage={searchQueryParams.page ?? 1}
            returnSearchParams={returnSearchParams}
            totalCount={data.total_count}
          />
        )}
      </main>
    </>
  )
}

export default App
