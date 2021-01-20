import { useEffect, useState } from "react"

import { ResponseOxfordDictionary } from "@/types"
import { getSelection, getDisplayPosition, sendMessage } from "@/utils/index"

interface SelectionValue {
  word: string
  displayPosition: {
    top: number
    left: number
  }
}

const useLookUpWord = (): {
  lookUpWordResult: ResponseOxfordDictionary | null
  selectionValue: SelectionValue | null
} => {
  const [selectionValue, setSelectionValue] = useState<SelectionValue | null>(
    null
  )
  const [
    lookUpWordResult,
    setLookUpWordResult,
  ] = useState<ResponseOxfordDictionary | null>(null)

  const searchWord = () => {
    const selection = getSelection()
    if (!selection) return

    const word = selection.toString().trim().split(/\s/)[0].toLowerCase()
    if (!word) return

    const rect = selection?.getRangeAt(0).getBoundingClientRect()
    const displayPosition = getDisplayPosition(rect)
    setSelectionValue({ word, displayPosition })
  }

  useEffect(() => {
    addEventListener("mouseup", searchWord)
  }, [])

  useEffect(() => {
    if (!selectionValue) return

    sendMessage<ResponseOxfordDictionary>(selectionValue.word)
      .then((res) => {
        setLookUpWordResult(res)
      })
      .catch(() => {
        setLookUpWordResult(null)
      })
  }, [selectionValue])

  return { lookUpWordResult, selectionValue }
}

export default useLookUpWord
