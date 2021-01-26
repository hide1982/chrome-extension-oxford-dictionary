import React from "react"
import styled from "styled-components"

import { Entry, LexicalEntryWithId } from "@/types"
import Typography from "@/components/Typography"

const SHOW_ENTRY_INDEX = 0

const Entry = styled.div`
  margin-top: 16px;
`

const Sense = styled.div`
  & + & {
    margin-top: 8px;
  }
`

const Definition = styled.div`
  display: flex;
`

const DefinitionIndex = styled(Typography)`
  margin-right: 4px;
`

interface EntryProps {
  value: Entry[]
}

const Entries: React.FC<EntryProps> = ({ value: entries }) => {
  const senses = entries[SHOW_ENTRY_INDEX].senses

  if (!senses) return null

  return (
    <div>
      {senses.map((sense, i) => (
        <Sense key={sense.id}>
          <Definition>
            <DefinitionIndex fontWeight="bold">{i + 1}.</DefinitionIndex>
            <div>
              {sense.definitions && (
                <Typography fontWeight="bold">
                  {sense.definitions[0]}
                </Typography>
              )}
              {sense.examples &&
                sense.examples.map((example, i) => (
                  <Typography key={i.toString()}>{example.text}</Typography>
                ))}
            </div>
          </Definition>
        </Sense>
      ))}
    </div>
  )
}

interface Props {
  lexicalEntries: LexicalEntryWithId[]
}

const WordContent: React.FC<Props> = ({ lexicalEntries }) => (
  <div>
    {lexicalEntries.map(({ id, entries, lexicalCategory }) => {
      if (!entries || !entries[0].senses || !entries[0].senses[0].definitions) {
        return null
      }

      return (
        <Entry key={id}>
          <div>
            <Typography fontStyle="italic">{lexicalCategory.text}</Typography>
          </div>
          <Entries value={entries} />
        </Entry>
      )
    })}
  </div>
)

export default WordContent
