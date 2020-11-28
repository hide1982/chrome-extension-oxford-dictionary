import React from "react"
import FrameComponent, { FrameContextConsumer } from "react-frame-component"
import styled from "styled-components"

interface Props {
  className?: string
}

const StyledFrame = styled(FrameComponent)`
  border: none;
`

const Frame: React.FC<Props> = ({ className, children }) => (
  <StyledFrame className={className}>
    <FrameContextConsumer>{() => children}</FrameContextConsumer>
  </StyledFrame>
)

export default Frame
