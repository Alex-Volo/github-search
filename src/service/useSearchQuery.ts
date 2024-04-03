import { useQuery } from '@tanstack/react-query'
import { searchUser } from './api'
import type { ISearchUserQueryParams } from 'types'

export const useSearchUserQuery = ({q, enabled, sort, order, page}: ISearchUserQueryParams) =>
  useQuery({
    queryFn: () => searchUser(q, sort, order, page),
    queryKey: ['Search', q, sort, order, page],
    staleTime: 1000 * 60 * 10,
    enabled
  })
