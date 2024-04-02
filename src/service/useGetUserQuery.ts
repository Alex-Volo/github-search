import { useQuery } from '@tanstack/react-query'
import { getUser } from './api'

export const useGetUserQuery = (username: string, enabled = false) =>
  useQuery({
    queryFn: () => getUser(username),
    queryKey: ['User', username],
    staleTime: 1000 * 60 * 10,
    enabled
  })
