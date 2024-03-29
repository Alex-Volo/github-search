import ReactDOM from 'react-dom/client'
import App from './App'
import { Providers } from 'providers'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <Providers>
    <App />
  </Providers>
)

