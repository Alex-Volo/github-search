import { Header, SearchForm, Results, Pagination } from 'components'
import { GlobalStyle } from 'style/GlobalStyle'
import { useSearchUserQuery } from 'service/useSearchQuery'
import { useEffect, useState } from 'react'
import type { ISearchUserQueryParams, IUser } from 'types'

function App() {
  const [searchQueryParams, setSearchQueryParams] = useState<ISearchUserQueryParams>({ q: '', enabled: false })
  const { data, isSuccess } = useSearchUserQuery(searchQueryParams)
  console.log(data)
  console.log(searchQueryParams)
  const [currentUsersList, setCurrentUsersList] = useState<IUser[] | undefined>([])
  useEffect(() => {
    setCurrentUsersList(data?.data.items)
  }, [data, searchQueryParams])

  return (
    <>
      <GlobalStyle />
      <main className="main">
        <Header />
        <SearchForm returnSearchParams={(value: ISearchUserQueryParams) => setSearchQueryParams(value)} />
        <p className="totalCount">Всего результатов: {data && data.data.total_count}</p>
        {/* Пагинация */}
        {data && <Pagination currentPage={1} totalCount={data.data.total_count} />}
        <Results usersList={currentUsersList} />
      </main>
    </>
  )
}

export default App
