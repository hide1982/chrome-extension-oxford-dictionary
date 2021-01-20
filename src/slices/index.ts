import { combineReducers } from "@reduxjs/toolkit"
import dictionaryReducer from "@/slices/dictionarySlice"

const rootReducer = combineReducers({
  dictionary: dictionaryReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
