import { Header, SearchForm, Results, Pagination, Loader } from 'components'
import { GlobalStyle } from 'style/GlobalStyle'
import { useSearchUserQuery } from 'service/useSearchQuery'
import { useEffect, useState } from 'react'
import type { ISearchUserQueryParams, IUser } from 'types'

function App() {
  const [searchQueryParams, setSearchQueryParams] = useState<ISearchUserQueryParams>({ q: '', enabled: false })
  const { data, isSuccess, isFetching } = useSearchUserQuery(searchQueryParams)
  console.log(data)
  console.log(searchQueryParams)
  const [currentUsersList, setCurrentUsersList] = useState<IUser[] | undefined>([])

  const returnSearchParams = (value: ISearchUserQueryParams) => setSearchQueryParams((prev) => ({ ...prev, ...value }))

  useEffect(() => {
    setCurrentUsersList(data?.data.items)
  }, [data, searchQueryParams])

  return (
    <>
      <GlobalStyle />
      <main className="main">
        <Header />

        <SearchForm returnSearchParams={returnSearchParams} />

        {data && <p className="totalCount">Всего результатов: {data.data.total_count}</p>}

        {data && (
          <Pagination
            currentPage={searchQueryParams.page ?? 1}
            returnSearchParams={returnSearchParams}
            totalCount={data.data.total_count}
          />
        )}

        {/* {isFetching ? <Loader /> : <Results usersList={currentUsersList} />} */}
        <Loader />

        {data && (
          <Pagination
            currentPage={searchQueryParams.page ?? 1}
            returnSearchParams={returnSearchParams}
            totalCount={data.data.total_count}
          />
        )}
      </main>
    </>
  )
}

export default App
