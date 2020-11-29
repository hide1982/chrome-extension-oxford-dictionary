import React from "react"
import ReactDOM from "react-dom"
import styled, { ThemeProvider } from "styled-components"

import ResetCss from "styles/ResetCss"
import Frame from "components/Frame"
import getTheme from "utils/getTheme"

const DictionaryFrame = styled(Frame)`
  width: 500px;
  height: 300px;
`

const Container = styled.div``

ReactDOM.render(
  <DictionaryFrame>
    <ThemeProvider theme={getTheme()}>
      <ResetCss />
      <Container>
        <p>Oxford dictionary chrome extension</p>
      </Container>
    </ThemeProvider>
  </DictionaryFrame>,
  document.getElementById("root")
)
