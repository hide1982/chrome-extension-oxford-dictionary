import React from "react"
import styled from "styled-components"
import Icon, { IconName } from "@bit/hide1982.react-components.icon"

import { flexPosition } from "styles"

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
      <Icon name={iconName} width={16} height={16} color="#fff" />
    </StyledButton>
  )
}

export default IconButton
