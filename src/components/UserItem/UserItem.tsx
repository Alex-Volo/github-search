import { useState, type FC } from 'react'
import * as S from './styles'
import type { IUser } from 'types'
import { useGetUserQuery } from 'service/useGetUserQuery'
import { Loader } from 'components'

interface IUserItemProps {
  user: IUser
}

export const UserItem: FC<IUserItemProps> = ({ user }) => {
  const [isOpened, setIsOpened] = useState(false)
  const { data, isFetching, isError, error } = useGetUserQuery(user.login, isOpened)
  const handleOpenClick = () => {
    setIsOpened(!isOpened)
  }

  return (
    <S.UserItem $isOpened={isOpened}>
      <S.VisibleContainer>
        <S.Avatar src={user.avatar_url} alt={user.login} title={user.login} />

        <S.Link href={user.html_url} target="_blank">
          {user.login}
        </S.Link>

        <S.ArrowBtn onClick={() => handleOpenClick()}>&#9660;</S.ArrowBtn>
      </S.VisibleContainer>

      <S.UserDetails $isOpened={isOpened}>
        {isFetching ? (
          <Loader size={150} />
        ) : isError ? (
          <p>{error instanceof Error && error.message}</p>
        ) : (
          <>
            <div>
              <p>Тип: {data && data.type}</p>
              <p>id: {data && data.id}</p>
            </div>
            <div>
              <p>Публичных репозиториев: {data && data.public_repos}</p>
              <p>Подписчиков: {data && data.followers}</p>
            </div>
            <p>На GitHub c {data && new Date(data.created_at).toLocaleDateString()}</p>
          </>
        )}
      </S.UserDetails>
    </S.UserItem>
  )
}
