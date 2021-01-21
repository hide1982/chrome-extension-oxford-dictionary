import React, { useEffect } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"

import { border, boxShadow } from "@/styles"
import { Pronunciation } from "@/types"
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

const getIpaPronunciation = (pronunciations?: Pronunciation[]) => {
  if (!pronunciations) return
  return pronunciations.find(
    (pronunciation): pronunciation is Required<Pronunciation> =>
      pronunciation.phoneticNotation === "IPA"
  )
}

const Dictionary: React.FC = () => {
  const { words, wordIndex } = useSelector<RootState, RootState["dictionary"]>(
    (state) => state.dictionary
  )
  const { selectionValue } = useSelection()

  const dispatch = useDispatch()
  useEffect(() => {
    if (!selectionValue?.word) return

    dispatch(fetchWord(selectionValue.word))
  }, [selectionValue?.word])

  console.log(words)

  if (words.length === 0) return null

  const { word, lexicalEntries } = words[wordIndex].value
  const pronunciation = getIpaPronunciation(lexicalEntries[0].pronunciations)

  console.log(words)

  return (
    <Container>
      <ControlBar />
      <WordHeading values={{ word, pronunciation }} />
      <WordContent lexicalEntries={lexicalEntries} />
    </Container>
  )
}

export default Dictionary
