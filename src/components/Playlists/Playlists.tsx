import React, { useState } from "react"
import * as Styled from "./Playlists.style"
import { Button, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetchData, postData } from "../../utils/api"
import { useToast } from "@chakra-ui/react"
import { database } from "../../firebase"
import { useEffect } from "react"

export interface PlaylistsProps {
  playlists: any
}

const Playlists: React.FC<PlaylistsProps> = ({ playlists }) => {
  const [playlistsFromDatabase, setPlaylistsFromDatabase] = useState([] as any)
  const [isSaved, setIsSaved] = useState(false)
  const toast = useToast()

  const getPlaylistsFromDatabase = () => {
    database
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setPlaylistsFromDatabase(doc.data().playlists)
        })
      })
  }

  useEffect(() => {
    getPlaylistsFromDatabase()
  }, [])

  const linksList = playlistsFromDatabase.map((item: any) => {
    const saveToSpotify = () => {
      let tracksUris: string[] = []

      item.playlist.forEach((track: any) => {
        tracksUris.push(track.uri)
      })

      fetchData("https://api.spotify.com/v1/me").then((data) => {
        postData(`https://api.spotify.com/v1/users/${data.id}/playlists`, {
          name: item.playlists.name,
          description: "",
          public: false,
        }).then(() => {
          fetchData(`https://api.spotify.com/v1/me/playlists`).then(
            (playlists) => {
              playlists.items.forEach((playlist: any) => {
                if (playlist.name === item.playlists.name) {
                  postData(
                    `https://api.spotify.com/v1/playlists/${
                      playlist.id
                    }/tracks?uris=${encodeURIComponent(tracksUris.join(","))}`
                  )
                }
              })

              setIsSaved(true)

              toast({
                title: "Playlist added.",
                description: "The playlist is added to your Spotify account",
                status: "success",
                duration: 5000,
                isClosable: true,
              })
            }
          )
        })
      })
    }

    return (
      <Styled.Item>
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
                disabled={isSaved}
              >
                Save to Spotify
              </Button>
              <Button>
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

const mapStateToProps = (state: any) => {
  return {
    playlists: state.playlists,
  }
}

export default connect(mapStateToProps)(Playlists)
