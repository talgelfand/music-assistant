import React, { useState, useEffect } from "react"
import firebase from "firebase"
import { connect } from "react-redux"
import CardsList from "../CardsList"
import GeneratedPlaylistProps from "./GeneratedPlaylist.types"
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons"
import { EditableInput, Flex, useEditableControls } from "@chakra-ui/react"
import {
  Editable,
  EditablePreview,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { setPlaylistName } from "../../redux/actions"
import { database } from "../../firebase"
import { fetchData } from "../../utils/api"
import { addPlaylistToDatabase } from "../../helpers"
import LoadingSpinner from "../LoadingSpinner"

const GeneratedPlaylist: React.FC<GeneratedPlaylistProps> = ({
  playlists,
  setPlaylistName,
}) => {
  const { id } = useParams() as any

  const [currentUser, setCurrentUser] = useState({} as any)

  const [targetPlaylist, setTargetPlaylist] = useState({}) as any

  const getSinglePlaylistFromDatabase = () => {
    database
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.data().playlists.forEach((playlist: any) => {
            if (playlist.id === id) {
              setTargetPlaylist({
                id,
                name: playlist.name,
                tracks: playlist.tracks,
              })
            }
          })
        })
      })
  }

  useEffect(() => {
    const fetchTrackData = async () => {
      const result = await fetchData("https://api.spotify.com/v1/me")
      setCurrentUser(result)
    }

    fetchTrackData()

    getSinglePlaylistFromDatabase()
  }, [])

  const updatePlaylistName = (e: React.FormEvent<HTMLInputElement>) => {
    setPlaylistName(e)

    let newTracks: any = []

    targetPlaylist.tracks.forEach((item: any) => {
      console.log("Item", item)
      newTracks.push({
        id: item.id,
        name: item.name,
        artists: item.artists,
        image: item.image,
        linkToSpotify: item.linkToSpotify,
        uri: item.uri,
      })
    })

    database
      .collection("users")
      .doc(currentUser.id)
      .update({
        playlists: firebase.firestore.FieldValue.arrayUnion({
          id: targetPlaylist.id,
          name: e,
          tracks: [...newTracks],
        }),
      })
  }

  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton
          aria-label="approve"
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          aria-label="close"
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          aria-label="edit"
          size="sm"
          icon={<EditIcon />}
          {...getEditButtonProps()}
        />
      </Flex>
    )
  }

  return (
    <>
      {targetPlaylist.name && (
        <Editable
          textAlign="center"
          defaultValue={`Playlist ${targetPlaylist.name} ⚡️`}
          fontSize="2xl"
          isPreviewFocusable={false}
          marginTop="30px"
          onSubmit={(e: any) => updatePlaylistName(e)}
        >
          <EditablePreview />
          <EditableInput />
          <EditableControls />
        </Editable>
      )}

      {targetPlaylist.tracks ? (
        <CardsList
          searchItems={targetPlaylist.tracks}
          multipleValuesProperty="artists"
          fetchedFromDatabase
        />
      ) : (
        <LoadingSpinner />
      )}
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    playlists: state.playlists,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setPlaylistName: (name: string) => {
      dispatch(setPlaylistName(name))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneratedPlaylist)
