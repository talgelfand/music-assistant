import React, { ChangeEvent, useEffect } from "react"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react"
import { useState } from "react"
import { fetchData } from "../../utils/api"
import { setPlaylist } from "../../redux/actions"
import { connect } from "react-redux"
import PlaylistFormProps from "./PlaylistForm.types"
import CheckboxList from "../CheckboxList"
import SliderList from "../SliderList"
import { useHistory } from "react-router-dom"
import { v4 as uuid } from "uuid"
import { useToast } from "@chakra-ui/react"
import {
  addPlaylistToDatabase,
  filterTracksArray,
  generatePlaylist,
} from "../../helpers"

const PlaylistForm: React.FC<PlaylistFormProps> = ({
  playlists,
  setPlaylist,
}) => {
  const [currentUser, setCurrentUser] = useState({} as any)

  const [artist, setArtist] = useState("")
  const [track, setTrack] = useState("")
  const [artistId, setArtistId] = useState("")
  const [trackId, setTrackId] = useState("")
  const [genres, setGenres] = useState([] as any)
  const [features, setFeatures] = useState({
    acousticness: 50,
    danceability: 50,
    energy: 50,
    loudness: 50,
    instrumentalness: 50,
  })
  const [numberOfTracks, setNumberOfTracks] = useState(20) as any

  const history = useHistory()
  const toast = useToast()

  useEffect(() => {
    const fetchTrackData = async () => {
      const result = await fetchData("https://api.spotify.com/v1/me")
      setCurrentUser(result)
    }

    fetchTrackData()
  }, [])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    setData: React.Dispatch<React.SetStateAction<any>>
  ) => {
    setData(e.target.value)
  }

  const handleGeneration = async (e: any) => {
    e.preventDefault()

    try {
      const selectedArtist = await fetchData(
        `	https://api.spotify.com/v1/search?query=${encodeURIComponent(
          artist
        )}&type=artist`
      )

      const selectedTrack = await fetchData(
        `	https://api.spotify.com/v1/search?query=${encodeURIComponent(
          track
        )}&type=track`
      )

      setArtistId(selectedArtist.artists.items[0].id)
      setTrackId(selectedTrack.tracks.items[0].id)

      const generatedPlaylist = await generatePlaylist(
        numberOfTracks,
        artistId,
        genres,
        trackId,
        features.acousticness,
        features.danceability,
        features.energy,
        features.instrumentalness,
        features.loudness
      )

      const playlistId = uuid()
      const playlistName = JSON.stringify(new Date().toLocaleString())

      console.log("Tracks", generatedPlaylist.tracks)

      setPlaylist(
        playlistId,
        filterTracksArray(generatedPlaylist.tracks),
        playlistName
      )

      addPlaylistToDatabase(
        currentUser.id,
        playlistId,
        playlistName,
        generatedPlaylist.tracks
      )

      toast({
        title: "Playlist created.",
        description: "The playlist is added to your playlists list",
        status: "success",
        duration: 5000,
        isClosable: true,
      })

      history.push(`/playlist/${playlistId}`)
    } catch {
      toast({
        title: "Playlist cannot be created.",
        description: "Please check your input data.",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <Box width="80%" display="block" margin="auto" marginTop="40px">
      <form action="submit" onSubmit={handleGeneration}>
        <FormControl isRequired marginTop="20px">
          <FormLabel>Example artist:</FormLabel>
          <Input onChange={(e) => handleChange(e, setArtist)} required />
        </FormControl>
        <FormControl isRequired marginTop="20px">
          <FormLabel>Example track:</FormLabel>
          <Input onChange={(e) => handleChange(e, setTrack)} required />
        </FormControl>
        <CheckboxList data={genres} setData={setGenres} />
        <SliderList features={features} setFeatures={setFeatures} />
        <FormControl marginTop="20px">
          <FormLabel>Maximum amount of tracks</FormLabel>
          <NumberInput
            value={numberOfTracks}
            step={5}
            min={1}
            max={100}
            onChange={(value) => setNumberOfTracks(value)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Button
          colorScheme="blue"
          display="block"
          margin="auto"
          marginTop="30px"
          onClick={handleGeneration}
          type="submit"
        >
          Generate playlist
        </Button>
      </form>
    </Box>
  )
}

const mapStateToProps = (state: any) => {
  return {
    playlists: state.playlists,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setPlaylist: (id: any, playlist: any, name: any) => {
      dispatch(setPlaylist(id, playlist, name))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm)
