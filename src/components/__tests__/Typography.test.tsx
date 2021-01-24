import React from "react"
import "@/test-config"
import { render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import getTheme from "@/utils/getTheme"
import Typography, { Props } from "@/components/Typography"

const setup = (props?: Props) => {
  const utils = render(
    <ThemeProvider theme={getTheme()}>
      <Typography {...props}>typography</Typography>
    </ThemeProvider>
  )
  const typography = utils.getByTestId("typography")

  return {
    typography,
    utils,
  }
}

describe("Typography component", () => {
  test("screenshot", () => {
    const { typography } = setup()

    expect(typography).toMatchSnapshot()
  })

  test("should change each styles", () => {
    const { typography } = setup({
      fontColor: "#333",
      fontSize: 12,
      fontStyle: "italic",
      fontWeight: "bold",
    })

    expect(typography).toHaveStyle({
      color: "#333",
      fontSize: "12px",
      fontStyle: "italic",
      fontWeight: "bold",
    })
  })

  test("should change font size by string", () => {
    const { typography } = setup({
      fontSize: "11px",
    })

    expect(typography).toHaveStyle({ fontSize: "11px" })
  })
})
