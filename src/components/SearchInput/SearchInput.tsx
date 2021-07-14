import React, { ChangeEvent, useState } from "react"
import SearchInputProps from "./SearchInput.types"
import { fetchData } from "../../utils/api"
import * as Styled from "./SearchInput.style"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input"
import { SearchIcon } from "@chakra-ui/icons"

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  searchTerm,
  setData,
}) => {
  const [search, setSearch] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value
    setSearch(search)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const result = await fetchData(
      `	https://api.spotify.com/v1/search?query=/${encodeURIComponent(
        search
      )}&type=${searchTerm}`
    )

    if (searchTerm === "track") {
      setData(result.tracks.items)
    } else {
      setData(result.artists.items)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Styled.Input>
        <InputGroup>
          <InputLeftElement children={<SearchIcon />} />
          <Input
            type="text"
            placeholder={`Search for ${placeholder}`}
            onChange={handleChange}
          />
        </InputGroup>
      </Styled.Input>
    </form>
  )
}

export default SearchInput
