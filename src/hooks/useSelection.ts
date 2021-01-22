import { useEffect, useState } from "react"

import { getSelection, getDisplayPosition } from "@/utils/index"

interface SelectionValue {
  word: string
  displayPosition: {
    top: number
    left: number
  }
}

const useSelection = (): {
  selectionValue: SelectionValue | null
} => {
  const [selectionValue, setSelectionValue] = useState<SelectionValue | null>(
    null
  )

  const searchWord = () => {
    const selection = getSelection()
    if (!selection) return

    const words = selection.toString().trim().split(/\s/)
    if (words.length > 1 || words.length === 0) return

    const word = words[0].toLowerCase()
    if (!word) return

    const rect = selection.getRangeAt(0).getBoundingClientRect()
    const displayPosition = getDisplayPosition(rect)
    setSelectionValue({ word, displayPosition })
  }

  useEffect(() => {
    addEventListener("mouseup", searchWord)
  }, [])

  return { selectionValue }
}

export default useSelection
