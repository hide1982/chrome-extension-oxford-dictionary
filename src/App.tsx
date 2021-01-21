import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import { Provider } from "react-redux"

import store from "@/store"
import getTheme from "@/utils/getTheme"
import Main from "@/components/Main"

const entryPoint = document.createElement("div")
document.body.appendChild(entryPoint)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={getTheme()}>
      <Main />
    </ThemeProvider>
  </Provider>,
  entryPoint
)
