import { styled } from 'styled-components'

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 30px;
  color: #f4f4f4;
`

export const InputBox = styled.div`
  position: relative;
  width: 100%;
`
export const SearchIcon = styled.span`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 3px;
  left: 3px;
  z-index: 1;
  background:
    url('data:image/svg+xml,<svg width="504" height="50" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.8689 19.7998C25.8689 23.6006 22.9435 26.5991 19.4345 26.5991C15.9256 26.5991 13.0002 23.6006 13.0002 19.7998C13.0002 15.9989 15.9256 13.0005 19.4345 13.0005C22.9435 13.0005 25.8689 15.9989 25.8689 19.7998Z" stroke="%239A9A9A" stroke-width="2"/><line x1="1" y1="-1" x2="9.85181" y2="-1" transform="matrix(0.733809 0.679355 -0.611764 0.791041 24.0366 24.6274)" stroke="%239A9A9A" stroke-width="2" stroke-linecap="round"/></svg>')
      center no-repeat,
    transparent;
`

export const Input = styled.input`
  position: relative;
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 4px 50px;
  font-size: 20px;
  transition: box-shadow 0.3s;
  background-color: #fafafa;
  &:focus {
    box-shadow: 0 0 130px 0px #f0f0f096;
  }

  &::before {
    content: '';
    display: block;
  }

  &:-webkit-autofill:focus {
    background-color: red;
    -webkit-text-fill-color: #222;
    -webkit-box-shadow:
      0 0 0px 100px #fafafa inset,
      0 0 130px 0px #f0f0f096;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: #222;
    -webkit-box-shadow: 0 0 0px 100px #fafafa inset;
  }
`

export const SubmitButton = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;
  width: 45px;
  height: 45px;
  appearance: none;
  background-color: transparent;
  border: none;
  font-size: 32px;
  color: #303030;
  cursor: pointer;
`
