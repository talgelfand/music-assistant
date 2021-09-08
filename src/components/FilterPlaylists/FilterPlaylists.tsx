import React from "react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Playlists from "../Playlists"
import { useState } from "react"
import { useEffect } from "react"
import { fetchData } from "../../utils/api"

export interface FilterPlaylistsProps {}

const FilterPlaylists: React.FC<FilterPlaylistsProps> = () => {
  const [spotifyPlaylists, setSpotifyPlaylists] = useState([]) as any

  useEffect(() => {
    fetchData("https://api.spotify.com/v1/me/playlists").then((data) => {
      setSpotifyPlaylists(data)
    })
  }, [])

  return (
    <Tabs variant="soft-rounded" colorScheme="teal">
      <TabList
        display="flex"
        justifyContent="center"
        marginTop="40px"
        gridGap="40px"
      >
        <Tab>All playlists</Tab>
        <Tab>Local playlists</Tab>
        <Tab>Spotify playlists</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Playlists />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel></TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default FilterPlaylists
