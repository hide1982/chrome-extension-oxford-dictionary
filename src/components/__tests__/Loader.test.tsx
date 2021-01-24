import React from "react"
import "@/test-config"
import { render, screen } from "@testing-library/react"

import Loader from "@/components/Loader"

describe("Loader component", () => {
  test("snapshot visible", () => {
    render(<Loader isShow={true} />)

    expect(screen.getByTestId("loader")).toMatchSnapshot()
  })

  test("snapshot invisible", () => {
    render(<Loader isShow={false} />)

    expect(screen.getByTestId("loader")).toMatchSnapshot()
  })
})
