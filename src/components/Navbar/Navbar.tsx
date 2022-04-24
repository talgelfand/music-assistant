import { useState } from 'react'
import { Box, Button, useColorModeValue, Avatar } from '@chakra-ui/react'
import * as Styled from './Navbar.style'
import Player from '../Player'
import { Redirect } from 'react-router-dom'
import { NavbarProps } from './Navbar.types'
import { FaHouseDamage } from 'react-icons/fa'

const Navbar: React.FC<NavbarProps> = ({ isValidSession }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem('current_user')!
  )

  const logout = () => {
    const expiryTime = new Date().getTime()

    localStorage.setItem('expiry_time', expiryTime.toString())
    window.location.reload()
  }

  const NavbarComponent = () => {
    return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Styled.Navbar>
          <Styled.StyledLink to="/">
            <FaHouseDamage />
          </Styled.StyledLink>
          <Styled.StyledLink to="/tracks-explorer" color="teal.700">
            Analyse a track
          </Styled.StyledLink>
          <Styled.StyledLink to="/artists-explorer" color="teal.700">
            Explore an artist
          </Styled.StyledLink>
          <Styled.StyledLink to="/playlist-generator" color="teal.700">
            Create a playlist
          </Styled.StyledLink>
          <Styled.StyledLink to="/my-playlists" color="teal.700">
            My playlists
          </Styled.StyledLink>
          <Styled.PlayerContainer>{<Player /> || null}</Styled.PlayerContainer>
          <Avatar name={currentUser} bgColor="teal.900" color="white" />
          <Button variant="outline" colorScheme="teal" onClick={logout}>
            Logout
          </Button>
        </Styled.Navbar>
      </Box>
    )
  }

  return <>{isValidSession() ? <NavbarComponent /> : <Redirect to="/" />}</>
}

export default Navbar
