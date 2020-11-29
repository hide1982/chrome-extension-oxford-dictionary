import React from "react"
import FrameComponent, {
  FrameContextConsumer,
  FrameComponentProps,
} from "react-frame-component"
import styled, { StyleSheetManager } from "styled-components"

interface Props extends FrameComponentProps {
  className?: string
}

const StyledFrame = styled(FrameComponent)`
  border: none;
`

const Frame: React.FC<Props> = ({ className, children, ...props }) => (
  <StyledFrame className={className} {...props}>
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
