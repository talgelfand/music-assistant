import { Button } from "@chakra-ui/react"
import styled from "styled-components"

export const FixedLeftButton = styled(Button)`
  position: fixed;
  right: 0;
  margin-right: 0;
  top: 50%;
  transform: rotate(-90deg) translateX(-50%);
`
