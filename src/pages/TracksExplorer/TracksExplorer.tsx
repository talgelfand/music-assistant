import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import CardsList from "../../components/CardsList"
import SearchInput from "../../components/SearchInput"
import TracksExplorerProps from "./TracksExplorer.types"

const TracksExplorer: React.FC<TracksExplorerProps> = ({ isValidSession }) => {
  const [tracks, setTracks] = useState([] as any)

  return (
    <>
      {isValidSession() ? (
        <>
          <SearchInput
            placeholder="tracks"
            searchTerm="track"
            setData={setTracks}
            result={
              <CardsList
                searchItems={tracks}
                multipleValuesProperty="artists"
              />
            }
          />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  )
}

export default TracksExplorer
