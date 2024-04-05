import type { FC } from 'react'
import * as S from './styles'

interface ILoaderProps {
    size?: number
}

export const Loader: FC<ILoaderProps> = ({size}) => <S.Box><S.Loader style={{width: size, height: size}} /></S.Box>
