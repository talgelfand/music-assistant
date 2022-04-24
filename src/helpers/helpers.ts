import { database } from '../firebase'
import firebase from 'firebase'
import { fetchData, postData } from '../utils/api'

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
  const userRef = database.collection('users').doc(user)
  const userData = {
    playlists: firebase.firestore.FieldValue.arrayUnion({
      id: playlistId,
      name: name,
      tracks: [...newTracks],
    }),
  }

  userRef.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
      userRef.update(userData)
    } else {
      userRef.set(userData)
    }
  })
}

export const savePlaylistToSpotify = (playlistFromDatabase: any) => {
  let tracksUris: string[] = []

  playlistFromDatabase.tracks.forEach((track: any) => {
    tracksUris.push(track.uri)
  })

  const currentUserId = localStorage.getItem('current_user')!

  postData(`https://api.spotify.com/v1/users/${currentUserId}/playlists`, {
    name: playlistFromDatabase.name,
    description: '',
    public: false,
  }).then(() => {
    fetchData(`https://api.spotify.com/v1/me/playlists`).then((playlists) => {
      playlists.items.forEach((playlist: any) => {
        if (playlist.name === playlistFromDatabase.name) {
          postData(
            `https://api.spotify.com/v1/playlists/${
              playlist.id
            }/tracks?uris=${encodeURIComponent(tracksUris.join(','))}`
          )
        }
      })
    })
  })
}

export const deletePlaylistFromDatabase = (
  playlistFromDatabase: any,
  user: any
) => {
  database
    .collection('users')
    .doc(user)
    .update({
      playlists:
        firebase.firestore.FieldValue.arrayRemove(playlistFromDatabase),
    })
}
