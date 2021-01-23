import React from "react"
import styled from "styled-components"
import IconButton from "@bit/hide1982.react-components.icon-button"

import Typography from "@/components/Typography"

const ToastBase = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #000;
  min-width: 200px;
`

export interface Props {
  message: string | null
  onClose: () => void
  className?: string
}

const Toast: React.FC<Props> = ({ message, onClose, className }) => {
  if (!message) return null

  return (
    <ToastBase data-testid="toast" className={className}>
      <Typography data-testid="toast_message" fontColor="#fff">
        {message}
      </Typography>
      <IconButton
        data-testid="toast_close-button"
        name="close"
        color="#fff"
        onClick={onClose}
      />
    </ToastBase>
  )
}

export default Toast
