import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import ControlBar from "@/components/ControlBar"

const setup = (options?: { isMin?: boolean; isMax?: boolean }) => {
  const onNext = jest.fn()
  const onPrev = jest.fn()
  const onClose = jest.fn()
  const onInputEnter = jest.fn()
  const utils = render(
    <ControlBar
      onNext={onNext}
      onPrev={onPrev}
      onClose={onClose}
      onInputEnter={onInputEnter}
      isMin={options?.isMin ?? false}
      isMax={options?.isMax ?? false}
    />
  )
  const nextButton = utils.getByTestId(
    "control-bar_next-button"
  ) as HTMLButtonElement
  const prevButton = utils.getByTestId(
    "control-bar_prev-button"
  ) as HTMLButtonElement
  const closeButton = utils.getByTestId(
    "control-bar_close-button"
  ) as HTMLButtonElement
  const wordInput = utils.getByTestId(
    "control-bar_word-input"
  ) as HTMLInputElement
  const controlBar = utils.getByTestId("control-bar")

  return {
    fns: {
      onNext,
      onPrev,
      onClose,
      onInputEnter,
    },
    comps: {
      onInputEnter,
      nextButton,
      prevButton,
      closeButton,
      wordInput,
      controlBar,
    },
    utils,
  }
}

describe("ControlBar component", () => {
  test("snapshot", () => {
    const { comps } = setup()

    expect(comps.controlBar).toMatchSnapshot()
  })

  test("should call each callback events", () => {
    const { fns, comps } = setup()

    fireEvent.click(comps.nextButton)
    fireEvent.click(comps.prevButton)
    fireEvent.click(comps.closeButton)
    fireEvent.keyDown(comps.wordInput, {
      key: "Enter",
    })

    expect(fns.onNext).toBeCalledTimes(1)
    expect(fns.onPrev).toBeCalledTimes(1)
    expect(fns.onClose).toBeCalledTimes(1)
    expect(fns.onInputEnter).toBeCalledTimes(1)
  })

  test("should input test", () => {
    const { comps } = setup()
    fireEvent.change(comps.wordInput, { target: { value: "expect text" } })

    expect(comps.wordInput.value).toBe("expect text")
  })

  test("should disabled next button if isMax is true", () => {
    const { fns } = setup({ isMax: true })
    fireEvent.click(screen.getByTestId("control-bar_next-button"))

    expect(fns.onNext).toBeCalledTimes(0)
  })

  test("should disabled prev button if isMin is true", () => {
    const { fns } = setup({ isMin: true })
    fireEvent.click(screen.getByTestId("control-bar_prev-button"))

    expect(fns.onPrev).toBeCalledTimes(0)
  })
})
