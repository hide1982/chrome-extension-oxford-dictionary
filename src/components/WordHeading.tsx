import React from "react"
import styled from "styled-components"
import IconButton from "./IconButton"
import Typography from "./Typography"

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
  padding-bottom: 8px;
  border-bottom: solid 2px ${({ theme }) => theme.borderColor.main};
`

const Word = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
`

const Pronunciation = styled(Typography)`
  margin-left: 16px;
`

const SpeakerIconButton = styled(IconButton)`
  margin-left: 16px;
`

const WordHeading: React.FC = () => {
  return (
    <Container>
      <Word>hoge</Word>
      <Pronunciation>kənˈtroʊl</Pronunciation>
      <SpeakerIconButton iconName="speaker" />
    </Container>
  )
}

export default WordHeading
