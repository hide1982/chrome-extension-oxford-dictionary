import React from "react"
import styled from "styled-components"
import IconButton from "@bit/hide1982.react-components.icon-button"
import TextField from "@bit/hide1982.react-components.text-field"

interface Props {
  className?: string
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

const ControlBar: React.FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <IconButton name="leftArrow" />
      <IconButton name="rightArrow" />
      <TextField />
      <IconButton name="close" />
    </Container>
  )
}

export default ControlBar
