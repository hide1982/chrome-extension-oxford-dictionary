import { ContentType, ResponseType } from "constant"

interface BasicValue {
  id: string
  text: string
}

interface BasicValueWithType extends BasicValue {
  type: string
}

interface BasicValueGroup {
  domains: BasicValue[]
  id: string
  language: string
  regions: BasicValue[]
  registers: BasicValue[]
  text: string
}

export interface Pronunciation {
  audioFile?: string
  dialects: string[]
  phoneticNotation: "IPA" | "respell"
  phoneticSpelling: string
  regions?: BasicValue[]
  registers?: BasicValue[]
}

interface Construction {
  domains: BasicValue[]
  examples: string[]
  notes: BasicValueGroup[]
  regions: BasicValue[]
  registers: BasicValue[]
  text: string
}

interface Example {
  definitions: string[]
  domains: BasicValue[]
  notes: BasicValueGroup[]
  registers: BasicValue[]
  senseIds: string[]
  text: string
}

interface ThesaurusLink {
  entry_id: string
  sense_id: string
}

interface VariantForm {
  domains: BasicValue[]
  notes: BasicValueWithType[]
  pronunciations: Pronunciation[]
  regions: BasicValue[]
  registers: BasicValue[]
  text: string
}

interface Sense {
  antonyms?: BasicValueGroup[]
  constructions?: Construction[]
  crossReferenceMarkers?: string[]
  crossReferences?: BasicValueWithType[]
  definitions?: string[]
  domains?: BasicValue[]
  etymologies?: string[]
  examples?: Example[]
  id: string
  inflections?: Inflection[]
  notes?: BasicValueWithType
  pronunciations?: Pronunciation[]
  regions?: BasicValue[]
  registers?: BasicValue[]
  shortDefinitions: string[]
  subsenses?: Omit<Sense, "subsenses">[]
  synonyms?: BasicValueGroup[]
  thesaurusLinks?: ThesaurusLink[]
  variantForms?: VariantForm[]
}

interface Inflection {
  domains?: BasicValue[]
  grammaticalFeatures?: BasicValueWithType
  inflectedForm: string
  lexicalCategory?: BasicValue
  pronunciations?: Pronunciation[]
  regions?: BasicValue[]
  registers?: BasicValue[]
}

export interface Entry {
  crossReferenceMarkers?: string[]
  crossReferences?: BasicValueWithType[]
  etymologies: string[]
  grammaticalFeatures?: BasicValueWithType[]
  homographNumber?: string
  inflections: Inflection[]
  notes?: BasicValueGroup[]
  pronunciations?: Pronunciation[]
  senses?: Sense[]
}

export interface LexicalEntry {
  compounds?: BasicValueGroup[]
  derivativeOf?: BasicValueGroup[]
  derivatives?: BasicValueGroup[]
  entries: Entry[]
  grammaticalFeatures?: BasicValueWithType[]
  language: string
  lexicalCategory: BasicValue
  notes?: BasicValueWithType[]
  phrasalVerbs?: BasicValueGroup[]
  phrases?: BasicValueGroup[]
  pronunciations?: Pronunciation[]
  text: string
  variantForms?: VariantForm[]
}

export interface Result {
  id: string
  language: string
  lexicalEntries: LexicalEntry[]
  pronunciations: Pronunciation[]
  type: string
  word: string
}

export interface ResponseOxfordDictionary {
  metadata: unknown
  query: string
  results: Result[]
  error?: unknown
}

interface Translation {
  detected_source_language: string
  text: string
  source: string
}

export interface ResponseDeeplTranslation {
  translations: Translation[]
}

export interface State {
  words: DictionaryData[]
  translation: TranslationData | null
  wordIndex: number
  isShow: boolean
  contentType: ContentType
}

export interface DictionaryResponseData extends ResponseOxfordDictionary {
  translation: string
}

export interface TranslateResponseData {
  translate: TranslationData
}

export interface ResponseDictionary {
  isSuccess: boolean
  type: ResponseType.Dictionary
  data: [ResponseDeeplTranslation, ResponseOxfordDictionary]
}

export interface ResponseTranslate {
  isSuccess: boolean
  type: ResponseType.Translate
  data: ResponseDeeplTranslation
}

export interface FormatePostDictionaryParams {
  count: number
  word: string
  results: Result[]
  translation: string
  accessDates: number[]
  lastAccessDate: number
}

export interface DictionaryData extends FormatePostDictionaryParams {
  id: string
}

export interface TranslationData {
  source: string
  translations: Translation[]
}

export interface MessageResponseDictionary {
  type: ResponseType.Dictionary
  isSuccess: boolean
  data: DictionaryData
}

export interface MessageResponseTranslation {
  type: ResponseType.Translate
  isSuccess: boolean
  data: TranslationData
}

export interface MessageResponseAllWords {
  type: ResponseType.AllWords
  isSuccess: boolean
  data: DictionaryData[]
}

export type Response = ResponseDictionary | ResponseTranslate

export type MessageResponse =
  | MessageResponseDictionary
  | MessageResponseTranslation
  | MessageResponseAllWords
