import React from "react"
import styled from "styled-components"
import { LexicalEntry, Entry } from "types"
import Typography from "./Typography"

interface Props {
  lexicalEntries: LexicalEntry[]
}

const SHOW_ENTRY_INDEX = 0

const Definition = styled.div`
  display: flex;
`

const Entries: React.FC<{ value: Entry[] }> = ({ value: entries }) => {
  const senses = entries[SHOW_ENTRY_INDEX].senses

  if (!senses) return null

  return (
    <div>
      {senses.map((sense, i) => (
        <div key={i.toString()}>
          <Definition>
            <Typography fontWeight="bold">{i + 1}</Typography>
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
        </div>
      ))}
    </div>
  )
}

const WordContent: React.FC<Props> = ({ lexicalEntries }) => {
  return (
    <div>
      {lexicalEntries.map(({ entries, lexicalCategory }, i) => (
        <React.Fragment key={i.toString()}>
          <div>
            <Typography fontStyle="italic">{lexicalCategory.text}</Typography>
          </div>
          <Entries value={entries} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default WordContent
