import React, { useState } from 'react'
import SearchInput from '../../components/SearchInput'
import CardsList from '../../components/CardsList'
import { Redirect } from 'react-router-dom'
import { ArtistsExplorerProps } from './ArtistsExplorer.types'

const ArtistsExplorer: React.FC<ArtistsExplorerProps> = ({
  isValidSession,
}) => {
  const [artists, setArtists] = useState([] as any)

  return (
    <>
      {isValidSession() ? (
        <SearchInput
          placeholder="artists"
          searchTerm="artist"
          setData={setArtists}
          result={
            <CardsList searchItems={artists} multipleValuesProperty="genres" />
          }
        />
      ) : (
        <Redirect to="/" />
      )}
    </>
  )
}

export default ArtistsExplorer
