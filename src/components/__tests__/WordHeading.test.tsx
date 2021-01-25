import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@/test-config"

import { ThemeProvider } from "styled-components"
import WordHeading from "@/components/WordHeading"
import getTheme from "@/utils/getTheme"

const wordText = "word"
const phoneticSpellingText = "phoneticSpelling"

const setup = () => {
  const onPlayAudio = jest.fn()
  const utils = render(
    <ThemeProvider theme={getTheme()}>
      <WordHeading
        word={wordText}
        phoneticSpelling={phoneticSpellingText}
        onPlayAudio={onPlayAudio}
      />
    </ThemeProvider>
  )

  const wordHeading = utils.getByTestId("word-heading")
  const speakerButton = utils.getByTestId("word-heading_speaker-button")
  const word = utils.getByTestId("word-heading_word")
  const phoneticSpelling = utils.getByTestId("word-heading_phonetic-spelling")

  return {
    utils,
    fns: {
      onPlayAudio,
    },
    comps: {
      wordHeading,
      speakerButton,
      word,
      phoneticSpelling,
    },
  }
}

describe("WordHeading component", () => {
  test("snapshot", () => {
    const { comps } = setup()

    expect(comps.wordHeading).toMatchSnapshot()
  })

  test("should call onPlayAudio() when click speaker button", () => {
    const { fns, comps } = setup()
    fireEvent.click(comps.speakerButton)

    expect(fns.onPlayAudio).toBeCalled()
  })

  test("should render word", () => {
    const { comps } = setup()

    expect(comps.word.textContent).toBe(wordText)
  })

  test("should render phonetic spelling", () => {
    const { comps } = setup()

    expect(comps.phoneticSpelling.textContent).toBe(phoneticSpellingText)
  })
})
