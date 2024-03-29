import { Routes, Route } from 'react-router-dom'
import { Main, NotFoundPage } from 'pages'

export function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
