import { type FC } from 'react'
import { UserItem } from 'components'
import type { IUser } from 'types' 
import * as S from './styles'

interface IResultsProps {
  usersList: IUser[] | undefined
}

export const Results: FC<IResultsProps> = ({ usersList }) => {


  const userElements = usersList && usersList.map((user) => <UserItem key={user.id} user={user} />)

  return <S.Box> {userElements} </S.Box>
}
