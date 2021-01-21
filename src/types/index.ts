/// <reference types="chrome"/>

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

export interface LexicalEntryWithId extends LexicalEntry {
  id: string
}

export interface Result {
  id: string
  language: string
  lexicalEntries: LexicalEntry[]
  pronunciations?: Pronunciation[]
  type: string
  word: string
}

export interface ResponseOxfordDictionary {
  metadata?: {
    operation: string
    provider: string
    schema: string
  }
  query?: string
  results?: Result[]
  error?: string
}

export interface WordValue extends Result {
  lexicalEntries: LexicalEntryWithId[]
}
