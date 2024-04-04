import { styled } from 'styled-components'

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    padding: 8px 16px;
    margin: 0 16px;

    border-radius: 16px;
  }
`
export const Page = styled.span`
  position: relative;
  background-color: #2a2a2a;
  box-shadow: 1px 1px 3px -1px #f0f0f0;
  cursor: pointer;
`

export const ActivePage = styled.span`
  box-shadow: 0 0 40px 0 #fafafa94;
  background-color: #fafafa;
  color: #222;
  cursor: auto;
`
export const Arrow = styled.div`
  position: relative;
  top: -1.5px;
  height: 100%;
  transform: scaleY(2);
  display: flex;
  align-items: self-start;
  justify-content: center;
`
