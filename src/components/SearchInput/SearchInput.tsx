import React, { ChangeEvent, useState } from "react"
import SearchInputProps from "./SearchInput.types"
import { fetchData } from "../../utils/api"
import * as Styled from "./SearchInput.style"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input"
import { SearchIcon } from "@chakra-ui/icons"
import LoadingSpinner from "../LoadingSpinner"

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  searchTerm,
  setData,
  result,
}) => {
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value
    setSearch(search)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    setLoading(true)

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

    setLoading(false)
  }

  return (
    <>
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
      {loading ? <LoadingSpinner /> : result}
    </>
  )
}

export default SearchInput
