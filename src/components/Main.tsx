import React, { useEffect } from "react"
import styled from "styled-components"
import Draggable from "react-draggable"
import { useDispatch } from "react-redux"

import Frame from "@/components/Frame"
import Dictionary from "@/components/Dictionary"
import useSelection from "@/hooks/useSelection"
import { border, boxShadow } from "@/styles"
import ResetCss from "@/styles/ResetCss"
import { useSelector } from "@/slices"
import { fetchWord } from "@/slices/dictionarySlice"

const DictionaryFrame = styled(Frame)`
  width: 500px;
  height: 300px;
  overflow-x: hidden;
`

const Container = styled.div`
  display: inline-flex;
  position: relative;
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

const Handle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor.main};
  cursor: move;
`

const initialContent = `
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <div style="overflow-x: hidden;"></div>
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
  }, [selectionValue?.word])

  if (!isShow) return null

  return (
    <Draggable grid={[3, 3]} handle=".handle">
      <Container>
        <Handle className="handle" />
        <DictionaryFrame head={frameHead} initialContent={initialContent}>
          <ResetCss />
          <Dictionary />
        </DictionaryFrame>
      </Container>
    </Draggable>
  )
}

export default Main
