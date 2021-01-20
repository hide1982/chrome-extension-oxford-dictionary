import {
  OXFORD_DICTIONARY_API_BASE_URL,
  OXFORD_DICTIONARY_APP_ID,
  OXFORD_DICTIONARY_APP_KEY,
} from "@/config"
import { ResponseOxfordDictionary } from "@/types"

export const fetchDictionaryByWord = async (
  lang: string,
  word: string
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
