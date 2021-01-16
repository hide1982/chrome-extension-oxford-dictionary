import React from "react"
import styled from "styled-components"
import { border, boxShadow } from "styles"

import { Pronunciation } from "types"
import { ensure } from "utils"
import { dictionaryStub } from "stub"

import ControlBar from "components/ControlBar"
import WordHeading from "components/WordHeading"
import WordContent from "components/WordContent"

const Container = styled.div`
  ${boxShadow.default};
  ${border.default};
  width: 500px;
  min-height: 300px;
  background-color: ${({ theme }) => theme.backgroundColor.main};
  padding: 12px;
`

const getIpaPronunciation = (pronunciations: Pronunciation[]) =>
  pronunciations.find(
    (pronunciation): pronunciation is Required<Pronunciation> =>
      pronunciation.phoneticNotation === "IPA"
  )

const Dictionary: React.FC = () => {
  const result = dictionaryStub.results[0]
  const { word, pronunciations, lexicalEntries } = result
  const { audioFile, phoneticSpelling } = ensure(
    getIpaPronunciation(pronunciations)
  )

  return (
    <Container>
      <ControlBar />
      <WordHeading values={{ word, audioFile, phoneticSpelling }} />
      <WordContent lexicalEntries={lexicalEntries} />
    </Container>
  )
}

export default Dictionary
