import React from "react"
import styled from "styled-components"
import { isNumber } from "lodash"

import { fontFamily } from "@/styles"

const DEFAULT_FONT_SIZE = 16

interface Props {
  fontSize?: number | string
  fontStyle?: "normal" | "italic" | "oblique"
  fontColor?: string
  fontWeight?:
    | "normal"
    | "bold"
    | "bolder"
    | "lighter"
    | "initial"
    | "inherit"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
  className?: string
}

const formatFontSizeValue = (size: Props["fontSize"]) => {
  if (isNumber(size)) return `${size}px`

  return size
}

const StyledTypography = styled.p<Props>`
  font-family: ${fontFamily};
  font-size: ${({ fontSize }) => formatFontSizeValue(fontSize)};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-style: ${({ fontStyle }) => fontStyle};
  color: ${({ fontColor, theme }) => fontColor ?? theme.fontColor.main};
`

const Typography: React.FC<Props> = ({
  fontSize = DEFAULT_FONT_SIZE,
  ...props
}) => <StyledTypography fontSize={fontSize} {...props} />

export default Typography
