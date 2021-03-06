import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

import { ResponseOxfordDictionary, WordValue } from "@/types"
import { sendMessage } from "@/utils"

interface Word {
  id: string
  value: WordValue
}

interface State {
  words: Word[]
  wordIndex: number
  isShow: boolean
  isLoading: boolean
  message: string | null
}

const initialState: State = {
  words: [],
  wordIndex: 0,
  isShow: false,
  isLoading: false,
  message: null,
}

export const fetchWord = createAsyncThunk(
  "dictionary/fetchWord",
  async (word: string) => {
    const res = await sendMessage<ResponseOxfordDictionary>(word)
    return res
  }
)

const slice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    closeDictionary: (state) => {
      state.isShow = false
    },
    nextWord: (state) => {
      state.wordIndex++
    },
    prevWord: (state) => {
      state.wordIndex--
    },
    clearMessage: (state) => {
      state.message = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWord.pending, (state) => {
      state.isLoading = true
      state.message = null
    })
    builder.addCase(fetchWord.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.message = `${action.meta.arg} was not found`
        state.isLoading = false
        return
      }

      if (!action.payload.results) return

      const value = {
        ...action.payload.results[0],
        lexicalEntries: action.payload.results[0].lexicalEntries.map(
          (entry) => ({ ...entry, id: nanoid() })
        ),
      }

      state.wordIndex = state.words.length
      state.words.push({
        id: nanoid(),
        value,
      })
      state.isLoading = false
      state.isShow = state.words.length !== 0
    })
  },
})

export const {
  closeDictionary,
  clearMessage,
  nextWord,
  prevWord,
} = slice.actions

export default slice.reducer
