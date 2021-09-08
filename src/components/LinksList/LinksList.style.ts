import styled from "styled-components"

export const Item = styled.div`
  transition: ease-in all 0.3s;

  &:hover {
    transform: scale(105%);
  }
`

export const List = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 50px;
`
