import React from "react"
import styled from "styled-components"
import IconButton from "@bit/hide1982.react-components.icon-button"

import Typography from "@/components/Typography"

interface Props {
  word: string
  phoneticSpelling?: string
  onPlayAudio: () => void
}

const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: solid 2px ${({ theme }) => theme.borderColor.main};
`

const PhoneticSpelling = styled(Typography)`
  margin-left: 16px;
`

const SpeakerIconButton = styled(IconButton)`
  margin-left: 16px;
`

const WordHeading: React.FC<Props> = ({
  word,
  phoneticSpelling,
  onPlayAudio,
}) => {
  return (
    <Container data-testid="word-heading">
      <Typography
        fontSize={24}
        fontWeight="bold"
        data-testid="word-heading_word"
      >
        {word}
      </Typography>
      {phoneticSpelling && (
        <>
          <PhoneticSpelling data-testid="word-heading_phonetic-spelling">
            {phoneticSpelling}
          </PhoneticSpelling>
          <SpeakerIconButton
            data-testid="word-heading_speaker-button"
            name="speaker"
            onClick={onPlayAudio}
          />
        </>
      )}
    </Container>
  )
}

export default WordHeading
