import React from "react"
import styled from "styled-components"
import IconButton from "./IconButton"
import TextField from "./TextField"

interface Props {
  className?: string
}

const Container = styled.div`
  display: flex;
  align-items: center;
`
const NextIconButton = styled(IconButton)`
  margin-left: 16px;
`

const CloseIconButton = styled(IconButton)`
  margin-left: 16px;
`

const SearchBox = styled(TextField)`
  margin-left: 16px;
  flex-grow: 1;
`

const Header: React.FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <IconButton iconName="left-arrow" />
      <NextIconButton iconName="right-arrow" />
      <SearchBox />
      <CloseIconButton iconName="close" />
    </Container>
  )
}

export default Header
