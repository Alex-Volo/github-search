import { useNavigate } from 'react-router-dom'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      404
      <button onClick={() => navigate('/')}>На главную</button>
    </div>
  )
}
