import React, { useState } from "react"
import styled from "styled-components"
import IconButton from "@bit/hide1982.react-components.icon-button"
import TextField from "@bit/hide1982.react-components.text-field"

export interface Props {
  onNext: () => void
  onPrev: () => void
  onClose: () => void
  onInputEnter: (lookUpWord: string) => void
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

const PrevButton = styled(IconButton)`
  margin-right: 12px;
`

const ControlBar: React.FC<Props> = ({
  onNext,
  onPrev,
  onClose,
  onInputEnter,
  isMin,
  isMax,
  className,
}) => {
  const [lookUpWord, setLookUpWord] = useState("")

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onInputEnter(lookUpWord)
  }

  return (
    <Container className={className} data-testid="control-bar">
      <PrevButton
        name="leftArrow"
        onClick={onPrev}
        disabled={isMin}
        data-testid="control-bar_prev-button"
      />
      <IconButton
        name="rightArrow"
        onClick={onNext}
        disabled={isMax}
        data-testid="control-bar_next-button"
      />
      <StyledTextField
        onKeydown={onKeyDown}
        onChange={(e) => setLookUpWord(e.target.value)}
        data-testid="control-bar_word-input"
      />
      <IconButton
        name="close"
        onClick={onClose}
        data-testid="control-bar_close-button"
      />
    </Container>
  )
}

export default ControlBar
