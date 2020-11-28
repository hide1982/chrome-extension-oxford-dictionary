import React from "react"
import FrameComponent, { FrameContextConsumer } from "react-frame-component"
import styled, { StyleSheetManager } from "styled-components"

interface Props {
  className?: string
}

const StyledFrame = styled(FrameComponent)`
  border: none;
`

const Frame: React.FC<Props> = ({ className, children }) => (
  <StyledFrame className={className}>
    <FrameContextConsumer>
      {({ document }) => (
        <StyleSheetManager target={document.head}>
          <>{children}</>
        </StyleSheetManager>
      )}
    </FrameContextConsumer>
  </StyledFrame>
)

export default Frame
