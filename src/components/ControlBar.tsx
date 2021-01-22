import React from "react"
import styled from "styled-components"
import IconButton from "@bit/hide1982.react-components.icon-button"
import TextField from "@bit/hide1982.react-components.text-field"

interface Props {
  onNext: () => void
  onPrev: () => void
  onClose: () => void
  isMin: boolean
  isMax: boolean
  className?: string
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

const StyledTextField = styled(TextField)`
  margin-left: 16px;
  margin-right: auto;
`

const LeftIconButton = styled(IconButton)`
  margin-right: 12px;
`

const ControlBar: React.FC<Props> = ({
  onNext,
  onPrev,
  onClose,
  isMin,
  isMax,
  className,
}) => (
  <Container className={className}>
    <LeftIconButton name="leftArrow" onClick={onPrev} disabled={isMin} />
    <IconButton name="rightArrow" onClick={onNext} disabled={isMax} />
    <StyledTextField />
    <IconButton name="close" onClick={onClose} />
  </Container>
)

export default ControlBar
