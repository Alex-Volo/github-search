import { Header, SearchForm, Results } from 'components'
import './App.css'
import { GlobalStyle } from 'style/GlobalStyle'
import { useSearchUserQuery } from 'service/useSearchQuery'
import { useEffect, useState } from 'react'
import type { IUser } from 'service/api'

function App() {
  const [searchValue, setSearchValue] = useState<string>('')
  const { data, isSuccess } = useSearchUserQuery(searchValue, Boolean(searchValue))
  console.log(data)
  const [currentUsersList, setCurrentUsersList] = useState<IUser[] | undefined>([])
  useEffect(() => {
    setCurrentUsersList(data?.data.items)
  }, [data])

  return (
    <>
      <GlobalStyle />
      <main className="main">
        <Header />
        <SearchForm returnSearchValue={(value: string) => setSearchValue(value)} />
        <Results usersList={currentUsersList} />
      </main>
    </>
  )
}

export default App
