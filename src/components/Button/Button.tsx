import React from "react"
import ButtonProps from "./Button.types"
import * as Styled from "./Button.style"

const Button: React.FC<ButtonProps> = ({
  variant,
  text,
  clickEvent,
  children,
}) => {
  return (
    <Styled.StyledButton variant={variant} onClick={clickEvent}>
      {children ? children : text}
    </Styled.StyledButton>
  )
}

export default Button
