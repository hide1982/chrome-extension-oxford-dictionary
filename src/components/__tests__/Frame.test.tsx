import React from "react"
import { render, screen } from "@testing-library/react"
import "@/test-config"
import Frame from "@/components/Frame"

describe("Frame component", () => {
  test("snapshot", () => {
    render(
      <Frame>
        <div>child component</div>
      </Frame>
    )

    expect(screen.getByTestId("frame")).toMatchSnapshot()
  })
})
