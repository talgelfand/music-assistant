import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = styled.div`
  height: 80px;
  padding: 10px 100px 10px 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const PlayerContainer = styled.div`
  width: 400px;
`

export const StyledLink = styled(Link)`
  color: teal;
  font-weight: bold;

  svg {
    width: 25px;
    height: 25px;
    fill: #1d4044;
  }
`
