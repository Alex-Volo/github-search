import type { ChangeEventHandler } from 'react'
import { useState, type FC } from 'react'
import * as S from './styles'

interface ISearchFormProps {
  className?: string
}

export const SearchForm: FC<ISearchFormProps> = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const handleSubmit
  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setSearchValue(e.target.value)
  }
  return (
    <S.Form onSubmit={}>
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
        <S.SubmitButton type='submit'>&#9658;</S.SubmitButton>
      </S.InputBox>
    </S.Form>
  )
}
