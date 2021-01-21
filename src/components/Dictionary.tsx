import React from "react"
import styled from "styled-components"

import { Pronunciation } from "@/types"
import { useSelector } from "@/slices"

import ControlBar from "@/components/ControlBar"
import WordHeading from "@/components/WordHeading"
import WordContent from "@/components/WordContent"

const Container = styled.div`
  width: 500px;
  min-height: 300px;
  background-color: ${({ theme }) => theme.backgroundColor.main};
  padding: 16px;
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
      <ControlBar />
      <WordHeading values={{ word, pronunciation }} />
      <WordContent lexicalEntries={lexicalEntries} />
    </Container>
  )
}

export default Dictionary
