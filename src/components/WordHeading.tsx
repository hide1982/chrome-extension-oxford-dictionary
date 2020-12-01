import React from "react"
import styled from "styled-components"
import { Pronunciation, Result } from "types"
import IconButton from "./IconButton"
import Typography from "./Typography"

interface Props {
  values: {
    word: Result["word"]
    audioFile: Pronunciation["audioFile"]
    phoneticSpelling: Pronunciation["phoneticSpelling"]
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
  padding-bottom: 8px;
  border-bottom: solid 2px ${({ theme }) => theme.borderColor.main};
`

const PhoneticSpelling = styled(Typography)`
  margin-left: 16px;
`

const SpeakerIconButton = styled(IconButton)`
  margin-left: 16px;
`

const playAudio = (audioFile: Pronunciation["audioFile"]) => () => {
  const audio = new Audio(audioFile)
  audio.play()
}

const WordHeading: React.FC<Props> = ({ values }) => {
  const { word, audioFile, phoneticSpelling } = values

  return (
    <Container>
      <Typography size={24} weight="bold">
        {word}
      </Typography>
      <PhoneticSpelling>{phoneticSpelling}</PhoneticSpelling>
      <SpeakerIconButton iconName="speaker" onClick={playAudio(audioFile)} />
    </Container>
  )
}

export default WordHeading
