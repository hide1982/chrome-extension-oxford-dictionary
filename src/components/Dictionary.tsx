import React from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"

import { Pronunciation } from "@/types"
import { useSelector } from "@/slices"
import * as actions from "@/slices/dictionarySlice"

import ControlBar from "@/components/ControlBar"
import WordHeading from "@/components/WordHeading"
import WordContent from "@/components/WordContent"
import Loader from "@/components/Loader"
import Toast from "@/components/Toast"

const Container = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  background-color: ${({ theme }) => theme.backgroundColor.main};
`

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 9999;
`

const StyledLoader = styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledControlBar = styled(ControlBar)`
  padding: 12px 16px;
`

const ScrollArea = styled.div`
  width: 100%;
  height: 246px;
  overflow-y: auto;
  padding: 0 16px 16px;
`

const playAudio = (audioFile: Pronunciation["audioFile"]) => {
  const audio = new Audio(audioFile)
  audio.play()
}

export const getIpaPronunciation = (
  pronunciations?: Pronunciation[]
): Required<Pronunciation> | undefined => {
  if (!pronunciations) return
  return pronunciations.find(
    (pronunciation): pronunciation is Required<Pronunciation> =>
      pronunciation.phoneticNotation === "IPA"
  )
}

const Dictionary: React.FC = () => {
  const dispatch = useDispatch()
  const { words, wordIndex, isLoading, message } = useSelector(
    (state) => state.dictionary
  )
  const { word, lexicalEntries } = words[wordIndex].value
  const pronunciation = getIpaPronunciation(
    lexicalEntries[0].entries[0].pronunciations
  )

  return (
    <Container>
      {isLoading && <Mask />}
      <StyledLoader isShow={isLoading} />
      <Toast
        message={message}
        onClose={() => dispatch(actions.clearMessage())}
      />
      <StyledControlBar
        onNext={() => dispatch(actions.nextWord())}
        onPrev={() => dispatch(actions.prevWord())}
        onClose={() => dispatch(actions.closeDictionary())}
        onInputEnter={(lookUpWord) => dispatch(actions.fetchWord(lookUpWord))}
        isMin={wordIndex === 0}
        isMax={wordIndex === words.length - 1}
      />
      <ScrollArea>
        <div>
          <WordHeading
            word={word}
            phoneticSpelling={pronunciation?.phoneticSpelling}
            onPlayAudio={() => playAudio(pronunciation?.audioFile)}
          />
          <WordContent lexicalEntries={lexicalEntries} />
        </div>
      </ScrollArea>
    </Container>
  )
}

export default Dictionary
