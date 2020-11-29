import styled from "styled-components"
import { fontFamily } from "styles"

const Typography = styled.p`
  font-family: ${fontFamily};
  color: ${({ theme }) => theme.fontColor.main};
  font-size: 16px;
`

export default Typography
