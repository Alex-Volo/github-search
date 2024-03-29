import './App.css'
// import { Octokit } from 'octokit'
import { AppRoutes } from 'routes'
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
    <AppRoutes />
    </>
  )
}

export default App
