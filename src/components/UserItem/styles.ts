import { styled } from 'styled-components'
interface IStyleProps {
  $isOpened: boolean
}
export const UserItem = styled.li<IStyleProps>`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 6px;
  border-radius: 10px;
  transition: max-height 0.3s;
  box-shadow:
    1px 1px 1px 0px #ffffffb3,
    4px 4px 9px -5px #fff;
  background-color: #2a2a2a;
  max-height: ${({ $isOpened }) => ($isOpened ? '320px' : '70px')};
`
export const VisibleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
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

export const UserDetails = styled.div<IStyleProps>`
  display: ${({ $isOpened }) => ($isOpened ? 'grid' : 'none')};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 80px 50px;
  grid-template-areas: 'A B'
  'C';
  font-size: 20px;
  & p {
    margin: 10px;
  }
  & > p {
    grid-column: 1 / -1;
  }
`
