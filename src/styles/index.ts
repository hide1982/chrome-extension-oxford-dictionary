import { css } from "styled-components"

export const boxShadow = {
  default: css`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  `,
}

export const border = {
  default: css`
    border: solid 1px #222;
  `,
}

export const backgroundColor = {
  default: css`
    background-color: #fff;
  `,
  hover: css`
    background-color: #eee;
  `,
}

export const flexPosition = {
  center: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

export const outline = css`
  outline: none;

  :focus {
    outline: solid 1px #222;
  }
`
