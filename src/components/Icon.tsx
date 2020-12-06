import React from "react"
import styled from "styled-components"

import IconClose from "images/close.svg"
import IconDelete from "images/delete.svg"
import IconLeftArrow from "images/left-arrow.svg"
import IconRightArrow from "images/right-arrow.svg"
import IconSearch from "images/search.svg"
import IconSpeaker from "images/speaker.svg"
import IconTrash from "images/trash.svg"

const DEFAULT_SIZE = 16

export type IconName =
  | "close"
  | "delete"
  | "left-arrow"
  | "right-arrow"
  | "search"
  | "speaker"
  | "trash"

interface Props {
  name: IconName
  size?: number
  className?: string
}

const Container = styled.div<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  svg {
    fill: ${({ theme }) => theme.icon.color.main};
  }
`

const Icon: React.FC<Props> = ({ name, size = DEFAULT_SIZE, className }) => (
  <Container size={size} className={className}>
    {name === "close" && <IconClose />}
    {name === "delete" && <IconDelete />}
    {name === "left-arrow" && <IconLeftArrow />}
    {name === "right-arrow" && <IconRightArrow />}
    {name === "search" && <IconSearch />}
    {name === "speaker" && <IconSpeaker />}
    {name === "trash" && <IconTrash />}
  </Container>
)

export default Icon
