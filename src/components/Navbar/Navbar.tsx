import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useEffect, useState } from "react"
import { fetchData } from "../../utils/api"
import * as Styled from "./Navbar.style"

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState({} as any)

  useEffect(() => {
    const fetchSongData = async () => {
      const result = await fetchData("https://api.spotify.com/v1/me")
      setCurrentUser(result)
    }

    fetchSongData()
  }, [])

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Styled.Navbar>
        <Styled.StyledLink to="/songs-explorer" color="teal.700">
          Analyse a song
        </Styled.StyledLink>
        <Styled.StyledLink to="/artists-explorer" color="teal.700">
          Explore an artist
        </Styled.StyledLink>
        <Styled.StyledLink to="/songs-explorer" color="teal.700">
          Create a playlist
        </Styled.StyledLink>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            backgroundColor="teal.500"
            color="white"
          >
            {currentUser.display_name}
          </MenuButton>
          <MenuList>
            <MenuItem>Favourite songs</MenuItem>
            <MenuItem>Favourite artists</MenuItem>
            <MenuItem>My playlists</MenuItem>
          </MenuList>
        </Menu>
      </Styled.Navbar>
    </Box>
  )
}

export default Navbar
