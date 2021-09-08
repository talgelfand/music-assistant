import React, { useState } from "react"
import SearchInput from "../../components/SearchInput"
import CardsList from "../../components/CardsList"

const ArtistsExplorer: React.FC = () => {
  const [artists, setArtists] = useState([] as any)

  return (
    <>
      <SearchInput
        placeholder="artists"
        searchTerm="artist"
        setData={setArtists}
        result={
          <CardsList searchItems={artists} multipleValuesProperty="genres" />
        }
      />
    </>
  )
}

export default ArtistsExplorer
