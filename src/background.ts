import _ from "lodash"

import { ResponseOxfordDictionary } from "@/types"
import {
  OXFORD_DICTIONARY_API_BASE_URL,
  OXFORD_DICTIONARY_APP_ID,
  OXFORD_DICTIONARY_APP_KEY,
} from "@/config"
import { DictionaryLang } from "@/constants"

const fetchWards = async (
  word: string,
  lang: DictionaryLang = DictionaryLang.English_US
): Promise<ResponseOxfordDictionary> => {
  const url = `${OXFORD_DICTIONARY_API_BASE_URL}/words/${lang}?q=${word}`
  const response = await fetch(url, {
    credentials: "include",
    headers: {
      app_id: OXFORD_DICTIONARY_APP_ID,
      app_key: OXFORD_DICTIONARY_APP_KEY,
    },
  })
  return response.json()
}

chrome.runtime.onMessage.addListener(
  (message: string, sender, sendResponse) => {
    fetchWards(message).then(sendResponse)
    return true
  }
)
