import { Header, SearchForm } from 'components'
import './App.css'
// import { Octokit } from 'octokit'
import { GlobalStyle } from 'style/GlobalStyle'

function App() {
  // const octokit = new Octokit()
  // octokit
  //   .request('GET /search/users', {
  //     q: 'any',
  //     'X-GitHub-Api-Version': '2022-11-28'
  //   })
  //   .then((res) => console.log(res))
  return (
    <>
      <GlobalStyle />
      <main className="main">
        <Header />
        <SearchForm />
      </main>
    </>
  )
}

export default App
