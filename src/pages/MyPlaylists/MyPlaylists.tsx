import React from "react"
import FilterPlaylists from "../../components/FilterPlaylists"
import Playlists from "../../components/Playlists"

export interface MyPlaylistsProps {}

const MyPlaylists: React.FC<MyPlaylistsProps> = () => {
  return (
    <>
      {/* <FilterPlaylists /> */}
      <Playlists />
    </>
  )
}

export default MyPlaylists
