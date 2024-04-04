import type { ChangeEventHandler, FormEventHandler } from 'react'
import { useState, type FC, useEffect } from 'react'
import { useSearchUserQuery } from 'service/useSearchQuery'
import * as S from './styles'
import type { Order, ISearchUserQueryParams, SortBy } from 'types'

interface ISearchFormProps {
  returnSearchParams: (value: ISearchUserQueryParams) => void
}

export const SearchForm: FC<ISearchFormProps> = ({ returnSearchParams }) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [startQuery, setStartQuery] = useState(false)
  const [sortBy, setSortBy] = useState<SortBy>(undefined)
  const [order, setOrder] = useState<Order>('desc')

  useSearchUserQuery({ q: searchValue, enabled: startQuery, sort: sortBy })

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setStartQuery(true)
  }

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    returnSearchParams({ q: searchValue, enabled: startQuery, sort: sortBy, order, page: 1 })
    setStartQuery(false)
  }, [sortBy, startQuery, order])

  return (
    <S.Form onSubmit={handleSubmit}>
      <label htmlFor="search-input" className="scronly">
        Введите имя пользователя
      </label>
      <S.InputBox>
        <S.SearchIcon />
        <S.Input
          id="search-input"
          placeholder={'Введите имя пользователя или организации'}
          type="search"
          minLength={1}
          maxLength={39}
          size={39}
          value={searchValue}
          required
          pattern={'^[a-zA-Z_][\\-_a-zA-Z0-9]{0,37}[a-zA-Z]$'}
          title={'Только латинский алфавит без специальных символов. Первый символ всегда буква.'}
          onChange={handleSearchChange}
        />
        <S.SubmitButton type="submit">&#9658;</S.SubmitButton>
      </S.InputBox>
      <S.SelectsBox>
        <S.SelectLabel>
          Сортировать по:
          <S.Select
            onChange={(e) => {
              if (e.currentTarget.value === '') setSortBy(undefined)
              setSortBy(e.currentTarget.value as SortBy)
              searchValue && setStartQuery(true)
            }}
            value={sortBy ?? ''}
            name="sortby"
            id="sortby"
          >
            <option value="">наибольшему соответствию</option>
            <option value="followers">количеству подписчиков</option>
            <option value="repositories">количеству репозиториев</option>
            <option value="joined">дате регистрации</option>
          </S.Select>
        </S.SelectLabel>
        <S.SelectLabel>
          Порядок:
          <S.Select
            onChange={(e) => {
              setOrder(e.currentTarget.value as Order)
              searchValue && setStartQuery(true)
            }}
            value={order ?? 'desc'}
            name="order"
            id="order"
          >
            <option value="desc">по убыванию</option>
            <option value="asc">по возрастанию</option>
          </S.Select>
        </S.SelectLabel>
      </S.SelectsBox>
    </S.Form>
  )
}
