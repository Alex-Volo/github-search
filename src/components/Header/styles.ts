import { styled } from 'styled-components'

export const Box = styled.header`
  display: flex;
  align-items: center;
  gap: 30px;
  color: #f4f4f4;
`

export const Heading = styled.h1`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 68px;
  color: #fafafa;
  cursor: pointer;
`

export const Logo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const BelowLogo = styled.p`
  position: absolute;
  bottom: -40px;
  font-size: 14px;
`

export const SearchSvg = styled.svg`
  width: 17px;
  height: 18px;
  margin-top: 32px;
  margin-bottom: 16px;
  padding: 0 15px 0px 8px;
  stroke: var(--text-color);
  fill: transparent;
`

export const SearchInput = styled.input`
  display: block;
  color: var(--text-color);
  width: 100%;
  margin-top: 18px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: 'Stratos', sans-serif;
  line-height: 1;
  &::placeholder {
    color: var(--text-color);
  }
`
