import React from "react"
import styled from "styled-components"
import IconButton from "@bit/hide1982.react-chrome-extension-components.icon-button"
import TextField from "@bit/hide1982.react-chrome-extension-components.text-field"

interface Props {
  className?: string
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

const StyledTextField = styled(TextField)`
  transition: background-color 300ms;
`

const ControlBar: React.FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <IconButton name="leftArrow" />
      <IconButton name="rightArrow" />
      <StyledTextField />
      <IconButton name="close" />
    </Container>
  )
}

export default ControlBar
