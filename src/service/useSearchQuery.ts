import { useQuery } from '@tanstack/react-query'
import { searchUser } from './api'

export const useSearchUserQuery = (q: string, enabled = false) =>
  useQuery({
    queryFn: () => searchUser(q),
    queryKey: ['Search', q],
    staleTime: 1000 * 60 * 10,
    enabled
  })
