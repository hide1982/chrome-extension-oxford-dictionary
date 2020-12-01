import React from "react"
import styled from "styled-components"
import { fontFamily } from "styles"
import { isNumber } from "lodash"

const DEFAULT_FONT_SIZE = 16

interface Props {
  size?: number | string
  style?: "normal" | "italic" | "oblique"
  color?: string
  weight?:
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

interface StyledTypographyProps
  extends Pick<Props, "size" | "style" | "weight"> {
  fontColor: Props["color"]
}

const formatFontSizeValue = (size: Props["size"]) => {
  if (isNumber(size)) return `${size}px`

  return size
}

const StyledTypography = styled.p<StyledTypographyProps>`
  font-family: ${fontFamily};
  font-size: ${({ size }) => formatFontSizeValue(size)};
  font-weight: ${({ weight }) => weight};
  color: ${({ color, theme }) => color ?? theme.fontColor.main};
`

const Typography: React.FC<Props> = ({
  size = DEFAULT_FONT_SIZE,
  style = "normal",
  weight = "normal",
  color,
  className,
}) => (
  <StyledTypography
    size={size}
    style={style}
    weight={weight}
    fontColor={color}
    className={className}
  />
)

export default Typography
