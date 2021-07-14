import { Link } from "react-router-dom"
import styled from "styled-components"

export const Navbar = styled.div`
  padding: 20px 100px 20px 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const StyledLink = styled(Link)`
  color: teal;
  font-weight: bold;
`
