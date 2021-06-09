import { styled } from '@yourssu/design-system'

export const Spinner = styled.div`
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  font-size: 10px;
  margin: 8px auto;
  text-indent: -9999em;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ foundation }) => foundation?.theme.borderThick};
  background: -moz-linear-gradient(left, ${({ foundation }) => foundation?.theme.borderThick} 10%, rgba(255, 255, 255, 0) 42%);
  background: -webkit-linear-gradient(left, ${({ foundation }) => foundation?.theme.borderThick} 10%, rgba(255, 255, 255, 0) 42%);
  background: -o-linear-gradient(left, ${({ foundation }) => foundation?.theme.borderThick} 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(left, ${({ foundation }) => foundation?.theme.borderThick} 10%, rgba(255, 255, 255, 0) 42%);
  background: linear-gradient(to right, ${({ foundation }) => foundation?.theme.borderThick} 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &::before {
    width: 50%;
    height: 50%;
    background: ${({ foundation }) => foundation?.theme.borderThick};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  &::after {
    background: ${({ foundation }) => foundation?.theme.bgNormal};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`


