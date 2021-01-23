import React from "react"
import "@/test-config"
import { fireEvent, render } from "@testing-library/react"

import Toast, { Props } from "@/components/Toast"

const setup = (props?: Partial<Omit<Props, "onClose">>) => {
  const onClose = jest.fn()
  const utils = render(
    <Toast onClose={onClose} message={props?.message ?? "message"} {...props} />
  )
  const toast = utils.getByTestId("toast")
  const message = utils.getByTestId("toast_message")
  const closeButton = utils.getByTestId("toast_close-button")

  return {
    fns: {
      onClose,
    },
    comps: {
      toast,
      message,
      closeButton,
    },
    utils,
  }
}

describe("Toast component", () => {
  test("snapshot", () => {
    const { comps } = setup()

    expect(comps.toast).toMatchSnapshot()
  })

  test("should call onClick callback", () => {
    const { fns, comps } = setup()
    fireEvent.click(comps.closeButton)

    expect(fns.onClose).toBeCalledTimes(1)
  })

  test("should hidden toast if message is null", () => {
    const onClose = jest.fn()
    const { container } = render(<Toast message={null} onClose={onClose} />)

    expect(container).toBeEmptyDOMElement()
  })
})
