import { styled } from 'styled-components'

export const Box = styled.ul`
  padding: 0;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  color: #fafafa;
  list-style: none;
  font-size: 24px;
`

export const UserItem = styled.li`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow:
    1px 1px 1px 0px #ffffffb3,
    4px 4px 9px -5px #fff,
    inset 0 0 36px 25px #222;
  background-color: #ffffff61;
`

export const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`
export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const ArrowBtn = styled.button`
  height: 100%;
  width: 50px;
  margin-left: auto;
  background-color: transparent;
  color: #cacaca;
  transform: scaleX(1.4);
  font-size: 16px;
  appearance: none;
  border: none;
  cursor: pointer;
`
