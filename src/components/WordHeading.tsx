import React from "react"
import styled from "styled-components"
import IconButton from "@bit/hide1982.react-components.icon-button"

import { Pronunciation, Result } from "@/types"
import Typography from "@/components/Typography"

interface Props {
  values: {
    word: Result["word"]
    pronunciation?: Pick<Pronunciation, "audioFile" | "phoneticSpelling">
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
  const { word, pronunciation } = values

  return (
    <Container>
      <Typography fontSize={24} fontWeight="bold">
        {word}
      </Typography>
      {pronunciation && (
        <>
          <PhoneticSpelling>{pronunciation.phoneticSpelling}</PhoneticSpelling>
          <SpeakerIconButton
            name="speaker"
            onClick={playAudio(pronunciation.audioFile)}
          />
        </>
      )}
    </Container>
  )
}

export default WordHeading
