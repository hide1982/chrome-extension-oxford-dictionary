import React from "react"
import styled from "styled-components"

import { flexPosition } from "styles"

import Icon, { IconName } from "./Icon"

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  iconName: IconName
  className?: string
}

const StyledButton = styled.button`
  ${flexPosition.center}
  background-color: ${({ theme }) => theme.icon.backgroundColor.main};
  outline: none;
  border: none;
  width: 26px;
  height: 26px;
  padding: 0;
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.icon.backgroundColor.focus};
  }
`

const IconButton: React.FC<Props> = ({ iconName, onClick, className }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      <Icon name={iconName} />
    </StyledButton>
  )
}

export default IconButton
