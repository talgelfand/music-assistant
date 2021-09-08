import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom"

export const Card = styled.div`
  margin-top: 30px;
`

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 710px;
`

export const Link = styled.div`
  margin-top: 20px;
`

export const ButtonLink = styled(RouterLink)`
  color: #fff;
  text-decoration: none;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
