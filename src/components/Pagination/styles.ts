import { styled } from 'styled-components'

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    padding: 8px 16px;
    margin: 0 16px;
    background-color: #2a2a2a;
    border-radius: 16px;
    box-shadow: 1px 1px 3px -1px #f0f0f0;
    cursor: pointer;
  }
`
// box-shadow: 0 0 40px 0 #fafafa94;
// background-color: #cfcfcf;
// color: #222;