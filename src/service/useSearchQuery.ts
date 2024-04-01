import { useQuery } from '@tanstack/react-query'
import { searchUser } from './api'

export const useSearchUserQuery = (q: string, enabled = true) =>
  useQuery({
    queryFn: () => searchUser(q),
    queryKey: ['User', q],
    staleTime: 1000 * 60 * 10,
    enabled
  })
