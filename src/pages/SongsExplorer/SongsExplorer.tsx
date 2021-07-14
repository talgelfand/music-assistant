import React, { useState } from "react"
import CardsList from "../../components/CardsList"
import SearchInput from "../../components/SearchInput"

const SongsExplorer: React.FC = () => {
  const [tracks, setTracks] = useState([] as any)

  console.log(tracks)

  return (
    <>
      <SearchInput
        placeholder="tracks"
        searchTerm="track"
        setData={setTracks}
      />
      <CardsList searchItems={tracks} multipleValuesProperty="artists" />
    </>
  )
}

export default SongsExplorer
