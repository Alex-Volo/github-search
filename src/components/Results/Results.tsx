import { useState, type FC } from 'react'
import * as S from './styles'
import type { IUser } from 'service/api'

interface IResultsProps {
  className?: string
  usersList: IUser[] | undefined
}

export const Results: FC<IResultsProps> = ({ usersList }) => {
  const userElements = usersList && usersList.map((user) => <S.UserItem key={user.id}>{user.login}</S.UserItem>)
  return <S.Box> {userElements} </S.Box>
}
