import { MouseEventHandler } from "react"

type Variant = "contained" | "outlined" | "text"
type Color = "primary" | "secondary"

interface ButtonProps {
  variant: Variant
  text: string
  clickEvent?: MouseEventHandler
  children?: any
}

export default ButtonProps
