import { styled } from 'styled-components'

export const Box = styled.header`
  display: flex;
  align-items: center;
  gap: 50px;
  color: #f4f4f4;
`

export const Heading = styled.h1`
  display: flex;
  align-items: center;
  margin-top: 0;
  gap: 30px;
  font-size: 74px;
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
