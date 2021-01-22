import React from "react"
import styled from "styled-components"

import { Pronunciation } from "@/types"
import { useSelector } from "@/slices"

import ControlBar from "@/components/ControlBar"
import WordHeading from "@/components/WordHeading"
import WordContent from "@/components/WordContent"

const Container = styled.div`
  width: 500px;
  height: 300px;
  background-color: ${({ theme }) => theme.backgroundColor.main};
`

const StyledControlBar = styled(ControlBar)`
  margin-bottom: 12px;
`

const ScrollArea = styled.div`
  width: 100%;
  height: 256px;
  overflow-y: auto;
  padding: 0 16px 16px;
`

const getIpaPronunciation = (pronunciations?: Pronunciation[]) => {
  if (!pronunciations) return
  return pronunciations.find(
    (pronunciation): pronunciation is Required<Pronunciation> =>
      pronunciation.phoneticNotation === "IPA"
  )
}

const Dictionary: React.FC = () => {
  const { words, wordIndex } = useSelector((state) => state.dictionary)
  const { word, lexicalEntries } = words[wordIndex].value
  const pronunciation = getIpaPronunciation(lexicalEntries[0].pronunciations)

  return (
    <Container>
      <StyledControlBar />
      <ScrollArea>
        <div>
          <WordHeading values={{ word, pronunciation }} />
          <WordContent lexicalEntries={lexicalEntries} />
        </div>
      </ScrollArea>
    </Container>
  )
}

export default Dictionary
