import { ResponseOxfordDictionary } from "@/types"

const sense = {
  id: "id",
  shortDefinitions: ["shortDefinitions"],
  definitions: ["definitions"],
  examples: [
    {
      definitions: ["definitions"],
      domains: [{ id: "id", text: "text" }],
      notes: [
        {
          domains: [{ id: "id", text: "test" }],
          id: "id",
          language: "en-us",
          regions: [{ id: "id", text: "text" }],
          registers: [{ id: "id", text: "text" }],
          text: "text",
        },
      ],
      registers: [{ id: "id", text: "text" }],
      senseIds: ["id"],
      text: "text",
    },
  ],
}

export const dictionaryStub: Omit<
  Required<ResponseOxfordDictionary>,
  "error"
> = {
  metadata: {
    operation: "operation",
    provider: "provider",
    schema: "schema",
  },
  query: "query",
  results: [
    {
      id: "id",
      language: "language",
      type: "type",
      word: "word",
      pronunciations: [
        {
          dialects: ["dilect"],
          audioFile: "audioFile",
          phoneticNotation: "IPA",
          phoneticSpelling: "phoneticSpelling",
        },
      ],
      lexicalEntries: [
        {
          language: "en-us",
          lexicalCategory: { id: "id", text: "verb" },
          text: "text",
          derivativeOf: [
            {
              domains: [{ id: "id", text: "test" }],
              id: "id",
              language: "en-us",
              regions: [{ id: "id", text: "text" }],
              registers: [{ id: "id", text: "text" }],
              text: "text",
            },
          ],
          entries: [
            {
              etymologies: ["etymologies"],
              inflections: [{ inflectedForm: "inflectedForm" }],
              senses: [sense, sense, sense],
            },
          ],
        },
      ],
    },
  ],
}
