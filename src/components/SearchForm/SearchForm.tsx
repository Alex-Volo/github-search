import type { ChangeEventHandler } from 'react'
import { useState, type FC } from 'react'
import { useSearchUserQuery } from 'service/useSearchQuery'
import * as S from './styles'
// import type { IUser } from 'service/api'

interface ISearchFormProps {
  className?: string
  returnSearchValue: (value: string) => void
}

export const SearchForm: FC<ISearchFormProps> = ({ returnSearchValue }) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [startQuery, setStartQuery] = useState(false)

  useSearchUserQuery(searchValue, startQuery)

  const handleSubmit = () => {
    returnSearchValue(searchValue)
    setStartQuery(true)
  }

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setSearchValue(e.target.value)
  }
  return (
    <S.Form
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
    >
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
      <div>
      <label>Сортировать по: 
        <select name='sortby' id='sortby'>
          <option value="">наибольшему соответствию</option>
          <option value="followers">количеству подписчиков</option>
          <option value="repositories">количеству репозиториев</option>
          <option value="joined">дате регистрации</option>
        </select>
      </label>
      <label>Порядок: 
        <select name="order" id="order">
          <option value="desc">по убыванию</option>
          <option value="asc">по возрастанию</option>
        </select>
      </label>
      </div>
    </S.Form>
  )
}
