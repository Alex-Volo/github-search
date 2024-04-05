import styled from 'styled-components'

export const Box = styled.div`
  width: 100%;  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  box-sizing: border-box;

`

export const Loader = styled.span`
  transform: rotateZ(45deg);
  perspective: 1000px;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  color: #fafafa;

  &:before,
  &:after {
    content: '';
    font-size: 70px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    transform: rotateX(250deg);
    animation: 1s spin linear infinite;
  }

  &:after {
    color: #464646;
    transform: rotateY(250deg);
    animation-delay: 0.4s;
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotateZ(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotateZ(360deg);
    }
  }

  @keyframes rotateccw {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-135deg);
    }
  }

  @keyframes spin {
    0%,
    100% {
      box-shadow: 0.2em 1px 15px 2px currentcolor, inset -0.2em -0 10px 2px currentcolor;
    }
    12% {
      box-shadow: 0.2em 0.2em 15px 2px currentcolor, inset -0.2em -0.2em 10px 2px currentcolor;
    }
    25% {
      box-shadow: 0 0.2em 15px 2px currentcolor, inset 0 -0.2em 10px 2px currentcolor;
    }
    37% {
      box-shadow: -0.2em 0.2em 15px 2px currentcolor, inset 0.2em -0.2em 10px 2px currentcolor;
    }
    50% {
      box-shadow: -0.2em 0 15px 2px currentcolor, inset 0.2em 0 10px 2px currentcolor;
    }
    62% {
      box-shadow: -0.2em -0.2em 15px 2px currentcolor,inset 0.2em 0.2em 10px 2px currentcolor;
    }
    75% {
      box-shadow: 0px -0.2em 15px 2px currentcolor, inset 0 0.2em 10px 2px currentcolor;
    }
    87% {
      box-shadow: 0.2em -0.2em 15px 2px currentcolor, inset -0.2em 0.2em 10px 2px currentcolor;
    }
  }
`
