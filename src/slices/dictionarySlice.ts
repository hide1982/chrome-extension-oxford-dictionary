import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

import { ResponseOxfordDictionary, Result } from "@/types"
import { sendMessage } from "@/utils"

interface Word {
  id: string
  value: Result
}

interface State {
  words: Word[]
  wordIndex: number
  isShow: boolean
  isLoading: boolean
}

const initialState: State = {
  words: [],
  wordIndex: 0,
  isShow: false,
  isLoading: false,
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWord.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchWord.fulfilled, (state, action) => {
      if (action.payload.error || !action.payload.results) return

      state.wordIndex = state.words.length
      state.words.push({
        id: nanoid(),
        value: action.payload.results[0],
      })
      state.isLoading = false
    })
  },
})

export default slice.reducer
