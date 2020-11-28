import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { backgroundColor, border, flexPosition, outline } from "styles"

type Icon =
  | "close"
  | "delete"
  | "left-arrow"
  | "right-arrow"
  | "search"
  | "speaker"
  | "trash"

interface Props {
  icon: Icon
}

const Container = styled.button`
  ${backgroundColor.default}
  ${border.default}
  ${outline}
  ${flexPosition.center}
  width: 26px;
  height: 26px;
  padding: 0;
  cursor: pointer;

  :hover {
    ${backgroundColor.hover};
  }
`

const Icon = styled.img`
  width: 16px;
  height: 16px;
`

const IconButton: React.FC<Props> = ({ icon }) => {
  const [iconUrl, setIconUrl] = useState<null | string>(null)

  useEffect(() => {
    const getIcon = async () => {
      const url = (await import(`images/${icon}.svg`)).default
      setIconUrl(url)
    }

    getIcon()
  }, [])

  return <Container>{iconUrl && <Icon src={iconUrl} />}</Container>
}

export default IconButton
