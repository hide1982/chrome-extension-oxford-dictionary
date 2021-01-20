import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
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
    console.log(res)
    return res
  }
)

export const slice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    addWord: {
      reducer: (state, action: PayloadAction<Word>) => {
        state.words.push(action.payload)
      },
      prepare: (payload) => {
        console.log("prepare", payload)
        return { ...payload, id: nanoid() }
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWord.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchWord.fulfilled, (state, action) => {
      slice.actions.addWord(action.payload)
      state.isLoading = false
    })
  },
})

export const { addWord } = slice.actions

export default slice.reducer
