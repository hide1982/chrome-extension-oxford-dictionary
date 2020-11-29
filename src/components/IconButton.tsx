import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { flexPosition } from "styles"

const SVG_THEME_CLASS_NAME = "svg-theme"

type IconName =
  | "close"
  | "delete"
  | "left-arrow"
  | "right-arrow"
  | "search"
  | "speaker"
  | "trash"

interface Props {
  iconName: IconName
  className?: string
}

type SvgComponent = React.FunctionComponent<React.SVGAttributes<SVGElement>>

const Container = styled.button`
  ${flexPosition.center}
  background-color: ${({ theme }) => theme.icon.backgroundColor.main};
  outline: none;
  border: none;
  width: 26px;
  height: 26px;
  padding: 0;
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.icon.backgroundColor.focus};
  }

  .${SVG_THEME_CLASS_NAME} {
    fill: ${({ theme }) => theme.icon.color.main};
    width: 16px;
    height: 16px;
  }
`

const IconButton: React.FC<Props> = ({ iconName, className }) => {
  const [icon, setIcon] = useState<null | JSX.Element>(null)

  useEffect(() => {
    const getIcon = async () => {
      const Icon: SvgComponent = (await import(`images/${iconName}.svg`))
        .default
      Icon.defaultProps = { className: SVG_THEME_CLASS_NAME }
      setIcon(<Icon />)
    }

    getIcon()
  }, [])

  return <Container className={className}>{icon}</Container>
}

export default IconButton
