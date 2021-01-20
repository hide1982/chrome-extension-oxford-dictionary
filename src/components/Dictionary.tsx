import React, { useEffect } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"

import { border, boxShadow } from "@/styles"
import { Pronunciation } from "@/types"
import { ensure } from "@/utils"
import { dictionaryStub } from "@/stub"
import useSelection from "@/hooks/useSelection"
import { RootState } from "@/slices"
import { fetchWord } from "@/slices/dictionarySlice"

import ControlBar from "@/components/ControlBar"
import WordHeading from "@/components/WordHeading"
import WordContent from "@/components/WordContent"

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
  const { words } = useSelector<RootState, RootState["dictionary"]>(
    (state) => state.dictionary
  )

  console.log(words)

  const { selectionValue } = useSelection()
  const dispatch = useDispatch()
  useEffect(() => {
    if (!selectionValue?.word) return

    dispatch(fetchWord(selectionValue.word))
  }, [selectionValue?.word])

  return (
    <Container>
      <ControlBar />
      <WordHeading values={{ word, audioFile, phoneticSpelling }} />
      <WordContent lexicalEntries={lexicalEntries} />
    </Container>
  )
}

export default Dictionary
