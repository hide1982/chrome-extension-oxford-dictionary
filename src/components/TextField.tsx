import styled from "styled-components"
import { fontFamily } from "styles"

const TextField = styled.input`
  color: ${({ theme }) => theme.fontColor.main};
  outline: none;
  border: 1px solid ${({ theme }) => theme.border.main};
  background-color: ${({ theme }) => theme.input.backgroundColor.main};
  padding: 4px 8px;
  font-family: ${fontFamily};
  font-size: 14px;

  :focus {
    background-color: ${({ theme }) => theme.input.backgroundColor.focus};
  }
`

export default TextField
