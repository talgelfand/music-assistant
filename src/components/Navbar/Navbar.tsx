import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  MenuDivider,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useEffect, useState } from "react"
import { fetchData } from "../../utils/api"
import * as Styled from "./Navbar.style"
import Player from "../Player"
import { Link } from "react-router-dom"
import NavbarProps from "./Navbar.types"

const Navbar: React.FC<NavbarProps> = () => {
  const [currentUser, setCurrentUser] = useState({} as any)

  useEffect(() => {
    const fetchTrackData = async () => {
      const result = await fetchData("https://api.spotify.com/v1/me")
      setCurrentUser(result)
    }

    fetchTrackData()
  }, [])

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Styled.Navbar>
        <Styled.StyledLink to="/tracks-explorer" color="teal.700">
          Analyse a track
        </Styled.StyledLink>
        <Styled.StyledLink to="/artists-explorer" color="teal.700">
          Explore an artist
        </Styled.StyledLink>
        <Styled.StyledLink to="/create-playlist" color="teal.700">
          Create a playlist
        </Styled.StyledLink>
        <Styled.PlayerContainer>{<Player /> || null}</Styled.PlayerContainer>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            colorScheme="teal"
            color="white"
          >
            {currentUser.display_name}
          </MenuButton>
          <MenuList>
            <MenuItem>Favourite tracks</MenuItem>
            <MenuItem>Favourite artists</MenuItem>
            <MenuItem>
              <Link to="/my-playlists">My playlists</Link>
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => localStorage.clear()}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Styled.Navbar>
    </Box>
  )
}

export default Navbar
