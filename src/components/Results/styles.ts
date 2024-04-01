import { styled } from 'styled-components'

export const Box = styled.ul`
  padding: 0;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: #f4f4f4;
  list-style: none;
  font-size: 24px;
`

export const UserItem = styled.li`
  border-radius: 10px;
  box-sizing: border-box;
  padding: 15px;
  height: 60px;
  width: 100%;
  box-shadow:
    5px 2px 12px -5px #fff,
    inset 0 0 33px 24px #222;
  background-color: #ffffff61;
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
