import styled from "styled-components"

const Loader = styled.div.attrs({ "data-testid": "loader" })<{
  isShow: boolean
}>`
  &,
  &::before,
  &::after {
    pointer-events: none;
    background: #000;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    content: "";
  }

  & {
    display: ${({ isShow }) => (isShow ? "block" : "none")};
    color: #000;
    position: relative;
    font-size: 9px;
    animation-delay: -160ms;
  }

  &::before {
    left: -1.5em;
    animation-delay: -320ms;
  }

  &::after {
    left: 1.5em;
  }

  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
`

export default Loader
