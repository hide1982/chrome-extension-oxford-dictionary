import React from "react"
import ReactDOM from "react-dom"
import styled, { ThemeProvider } from "styled-components"
import Draggable from "react-draggable"
import { Provider } from "react-redux"

import store from "@/store"
import Frame from "@/components/Frame"
import Dictionary from "@/components/Dictionary"
import ResetCss from "@/styles/ResetCss"
import getTheme from "@/utils/getTheme"

const DictionaryFrame = styled(Frame)`
  width: 500px;
  height: 300px;
`

const Container = styled.div`
  display: inline-flex;
  position: relative;
  z-index: 9999;
  padding: 24px;
  background-color: #eee;
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

const entryPoint = document.createElement("div")
document.body.appendChild(entryPoint)

ReactDOM.render(
  <Provider store={store}>
    <Draggable grid={[3, 3]}>
      <Container>
        <DictionaryFrame head={frameHead}>
          <ThemeProvider theme={getTheme()}>
            <ResetCss />
            <Dictionary />
          </ThemeProvider>
        </DictionaryFrame>
      </Container>
    </Draggable>
  </Provider>,
  entryPoint
)
