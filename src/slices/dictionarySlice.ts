import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

import { ResponseOxfordDictionary } from "@/types"
import { sendMessage } from "@/utils"

interface Word extends ResponseOxfordDictionary {
  id: string
}

interface State {
  words: Word[]
  displayIndex: number
  isShow: boolean
  isLoading: boolean
}

const initialState: State = {
  words: [],
  displayIndex: 0,
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
      state.words.push({ ...action.payload, id: nanoid() })
      state.isLoading = false
    })
  },
})

export default slice.reducer
