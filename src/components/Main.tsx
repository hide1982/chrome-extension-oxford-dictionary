import React, { useEffect } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"

import useSelection from "@/hooks/useSelection"
import { border, boxShadow } from "@/styles"
import ResetCss from "@/styles/ResetCss"
import { useSelector } from "@/slices"
import { fetchWord } from "@/slices/dictionarySlice"

import Frame from "@/components/Frame"
import Dictionary from "@/components/Dictionary"

const DictionaryFrame = styled(Frame)`
  width: 500px;
  height: 300px;
  overflow-x: hidden;
`

const Container = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  display: inline-flex;
  flex-direction: column;
  z-index: 9999;
  ${boxShadow.default};
  ${border.default};
`

const frameHead = (
  <>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,300&display=swap"
      rel="stylesheet"
    ></link>
  </>
)

const initialContent = `
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <div style="overflow: hidden;"></div>
  </body>
</html>
`

const Main: React.FC = () => {
  const dispatch = useDispatch()
  const { selectionValue } = useSelection()
  const { isShow } = useSelector((state) => state.dictionary)

  useEffect(() => {
    if (!selectionValue?.word) return

    dispatch(fetchWord(selectionValue.word))
  }, [selectionValue?.word, dispatch])

  if (!isShow || !selectionValue) return null

  return (
    <Container
      top={selectionValue.displayPosition.top}
      left={selectionValue.displayPosition.left}
    >
      <DictionaryFrame head={frameHead} initialContent={initialContent}>
        <ResetCss />
        <Dictionary />
      </DictionaryFrame>
    </Container>
  )
}

export default Main
