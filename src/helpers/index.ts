import { database } from "../firebase"
import firebase from "firebase"
import { fetchData } from "../utils/api"

export const generatePlaylist = async (
  numberOfTracks: number,
  artistId: string,
  genres: string,
  trackId: string,
  acousticness: number,
  danceability: number,
  energy: number,
  instrumentalness: number,
  loudness: number
) => {
  const result = await fetchData(
    `https://api.spotify.com/v1/recommendations?limit=${encodeURIComponent(
      numberOfTracks
    )}&seed_artists=${encodeURIComponent(
      artistId
    )}&seed_genres=${encodeURIComponent(
      genres
    )}&seed_tracks=${encodeURIComponent(
      trackId
    )}&target_acousticness=${encodeURIComponent(
      acousticness
    )}&target_danceability=${encodeURIComponent(
      danceability
    )}&target_energy=${encodeURIComponent(
      energy
    )}&target_instrumentalness=${encodeURIComponent(
      instrumentalness
    )}&target_loudness=${encodeURIComponent(loudness)}`
  )

  return result
}

export const filterTracksArray = (tracks: []) => {
  let newTracks: any = []

  tracks.forEach((item: any) => {
    newTracks.push({
      id: item.id,
      name: item.name,
      artists: item.artists,
      image: item.album.images[0].url,
      linkToSpotify: item.external_urls.spotify,
      uri: item.uri,
    })
  })

  return newTracks
}

export const addPlaylistToDatabase = (
  user: string,
  playlistId: any,
  name: string,
  tracks: []
) => {
  const newTracks = filterTracksArray(tracks)

  database.collection("users").doc(user).set({})

  database
    .collection("users")
    .doc(user)
    .update({
      playlists: firebase.firestore.FieldValue.arrayUnion({
        id: playlistId,
        name: name,
        tracks: [...newTracks],
      }),
    })
}
