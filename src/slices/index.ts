import { combineReducers } from "@reduxjs/toolkit"
import { createSelectorHook } from "react-redux"

import dictionaryReducer from "@/slices/dictionarySlice"

const rootReducer = combineReducers({
  dictionary: dictionaryReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export const useSelector = createSelectorHook<RootState>()

export default rootReducer
