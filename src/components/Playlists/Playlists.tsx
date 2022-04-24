import React, { useState } from 'react'
import * as Styled from './Playlists.style'
import { Button, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { database } from '../../firebase'
import { useEffect } from 'react'
import {
  deletePlaylistFromDatabase,
  savePlaylistToSpotify,
} from '../../helpers'
import LoadingSpinner from '../LoadingSpinner'

const Playlists: React.FC = () => {
  const [playlistsFromDatabase, setPlaylistsFromDatabase] = useState([] as any)
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem('current_user')!
  )
  const [loading, setLoading] = useState(true)
  const toast = useToast()

  useEffect(() => {
    database
      .collection('users')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setPlaylistsFromDatabase(doc.data().playlists)
        })
      })

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  })

  if (loading) return <LoadingSpinner />

  if (playlistsFromDatabase.length === 0) {
    return (
      <Heading size="lg" textAlign="center" marginTop="100px">
        You don't have any playlists yet
      </Heading>
    )
  }

  const linksList = playlistsFromDatabase.map((item: any, index: number) => {
    const saveToSpotify = () => {
      savePlaylistToSpotify(item)
      toast({
        title: 'Playlist added.',
        description: 'The playlist is added to your Spotify account',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }

    const deletePlaylist = () => {
      deletePlaylistFromDatabase(item, currentUser)
      toast({
        title: 'Playlist deleted.',
        description: 'The playlist is deleted from your playlists list.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }

    return (
      <Styled.Item key={index}>
        <LinkBox
          minWidth="xl"
          p="5"
          marginTop="20px"
          borderWidth="1px"
          rounded="md"
        >
          <Heading
            size="md"
            my="2"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <LinkOverlay>
              <Link to={`/playlist/${item.id}`}>{item.name}</Link>
            </LinkOverlay>
            <Styled.Buttons>
              <Button
                colorScheme="blue"
                marginRight="10px"
                onClick={saveToSpotify}
              >
                Save to Spotify
              </Button>
              <Button onClick={deletePlaylist}>
                <DeleteIcon color="teal" />
              </Button>
            </Styled.Buttons>
          </Heading>
        </LinkBox>
      </Styled.Item>
    )
  })

  return <Styled.List>{linksList}</Styled.List>
}

export default Playlists
